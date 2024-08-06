'use server';

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DIRECT_DATABASE_URL);
let clientPromise;

if (!clientPromise) {
    clientPromise = client.connect();
}

export async function POST(request) {
    console.log('Request received:', new Date().toISOString());
    const { email, name, id } = await request.json();

    try {
        console.log('Connecting to MongoDB:', new Date().toISOString());
        await clientPromise;
        console.log('Connected to MongoDB:', new Date().toISOString());
        const session = client.startSession();

        const transactionResults = await session.withTransaction(async () => {
            const db = client.db();
            const usersCollection = db.collection('User');

            console.log('Inserting user into collection:', new Date().toISOString());
            const newUser = await usersCollection.insertOne({
                email: email,
                name: name,
                id: id,
            }, { session });
            console.log('User inserted:', new Date().toISOString());
            return newUser;
        });

        console.log('Transaction results:', transactionResults, new Date().toISOString());
        if (transactionResults) {
            return NextResponse.json({ userID: transactionResults.insertedId, userName: name, email: email }, { status: 201 });
        } else {
            return NextResponse.json({ error: 'Transaction failed' }, { status: 500 });
        }
    } catch (err) {
        console.error('Error occurred:', err, new Date().toISOString());
        return NextResponse.json({ error: 'Failed to create user', details: err.message }, { status: 500 });
    }
}
