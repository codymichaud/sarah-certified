'use server';

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DIRECT_DATABASE_URL);

export async function POST(request) {
    console.log('request', request);

    const { email, name, id } = await request.json();

    try {
        console.log('connecting')
        await client.connect();
        const session = client.startSession();

        const transactionResults = await session.withTransaction(async () => {
            const db = client.db();
            const usersCollection = db.collection('User');

            // Create a new user within the transaction
            const newUser = await usersCollection.insertOne({
                email: email,
                name: name,
                id: id,
            }, { session });

            return newUser;
        });

        if (transactionResults) {
            console.log('Transaction successful:', transactionResults, transactionResults.ops);
            return NextResponse.json({ userID: transactionResults.insertedId, userName: name, email: email }, { status: 201 });
        } else {
            console.log('Transaction failed');
            return NextResponse.json({ error: 'Transaction failed' }, { status: 500 });
        }
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to create user', details: err.message }, { status: 500 });
    } finally {
        await client.close();
        await prisma.$disconnect();
    }
}
