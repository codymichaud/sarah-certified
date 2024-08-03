// import { PrismaClient } from '@prisma/client/edge';
// import { withAccelerate } from '@prisma/extension-accelerate';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient().$extends(withAccelerate());

// export async function POST(request) {
//     console.log('request', request);
//     // if (request.method === "POST") {
//         console.log('request', request, res);
//         const { userNameFirst, userNameLast, email, phoneNum, zip, id } = request.body;

//         try {
//             const newUser = await prisma.User.create({
//                 data: {
//                     name: `${userNameFirst} ${userNameLast}`,
//                     email: email,
//                     phone: phoneNum,
//                     zipCode: zip,
//                     id: id,
//                 },
//             });
//             return NextResponse.json({ user: newUser }, { status: 201 });
//         } catch (err) {
//             console.error(err);
//             return NextResponse.json({ error: 'Failed to create user', details: err.message }, { status: 500 });
//         } finally {
//             console.log('disconnecting')
//             await prisma.$disconnect();
//         }
//     // } else {
//     //     console.log('request', request, res);
//     //     console.error('Method not allowed', request, res);
//     //     res.status(405).json({ error: 'Method not allowed', request: request, res: res });
//     // }
// }