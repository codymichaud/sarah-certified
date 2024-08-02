'use client';

import React from 'react';
import useGetWindow from './useGetWindow';
import {
    Input,
    Button,
    Spinner,
} from "@nextui-org/react";
import Image from 'next/image'
import { PrismaClient } from '@prisma/client';
import googleImg from '../public/google.png';
import { useRouter } from "next/navigation";


export default function SignUpClient() {
    const router = useRouter();
    // const windowInfo = useGetWindow();
    const prisma = new PrismaClient();
    const [usableWindowInfo, setUsableWindowInfo] = React.useState(null);
    const [userNameFirst, setUserNameFirst] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userNameLast, setUserNameLast] = React.useState('');
    const [phoneNum, setPhoneNum] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [zip, setZip] = React.useState('');
    const [isMobile, setIsMobile] = React.useState(false);

    // React.useEffect(() => {
    //     if (windowInfo && usableWindowInfo === null) {
    //         console.log('windowWidth', windowInfo);
    //         setUsableWindowInfo(windowInfo);
    //     }
        
    // }, [windowInfo, usableWindowInfo]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('we got window', window.innerWidth)
            setIsMobile(window.innerWidth < 767);
        }
    }, [])

    const handleSignUp = async () => {
        setIsLoading(true);
        console.log('submitting', userNameFirst, userNameLast, email, phoneNum);

        router.push('/profile');
        setIsLoading(false);
        setEmail('');
        setUserNameFirst('');
        setUserNameLast('');
        setPhoneNum('');
        setZip('');

        // await prisma.user.create({
        //     data: {
        //       name: `${userNameFirst} ${userNameLast}`,
        //       email: email,
        //       phone: phoneNum,
        //       posts: [],
        //       id: 0,
        //     },
        //   }).then(res => {
        //     console.log('user created?', res);
        //   })

        // try {
        //     console.log('trying to create user');
        //     const response = await fetch('/api/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             userNameFirst,
        //             userNameLast,
        //             email,
        //             phoneNum,
        //             id: 0,
        //             zip,
        //         }),
        //     })
        //     if (!response.ok) {
        //         console.log('response not ok', response);
        //         setIsLoading(false);
        //         throw new Error('Failed to create user');
        //     }
        //     const result = await response.json();
        //     console.log('user created:', result.user);
        // } catch (err) {
        //     console.log('error creating user:', err);
        //     console.error(err);
        // } finally {
        //     console.log('finally');
        //     setIsLoading(false);
        // }
        
    }

    if (isMobile) {
        return (
            <div className='flex flex-col justify-evenly items-center text-foreground'>
                <h1>Start Your Journey to a Safer Food Experience</h1>
                <div className='flex flex-row items-center mb-5'>
                    <Button className='bg-secondary-desat-teal text-black' size='lg' variant='shadow'>
                        <Image 
                            alt='google logo'
                            src={googleImg}
                            width={18}
                            height={18}
                        />
                    </Button>
                </div>
                    <h3> Need color opinions for button^^</h3>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='First Name'
                        value={userNameFirst}
                        onChange={(e) => setUserNameFirst(e.target.value)}
                        onClear={() => {setUserNameFirst('')}}
                    />
                </div>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='Last Name'
                        value={userNameLast}
                        onChange={(e) => setUserNameLast(e.target.value)}
                        onClear={() => {setUserNameLast('')}}
                    />
                </div>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onClear={() => {setEmail('')}}
                    />
                </div>
                <div>
                    <Button
                        variant='shadow'
                        className='bg-secondary-warm-orange text-black'
                        radius='full'
                        size='md'
                        isLoading={isLoading}
                        onClick={() => handleSignUp()}
                        spinner={<Spinner color='secondary' />}
                        isDisabled={false}
                    >
                        Submit
                    </Button>
                </div>
                    <h3> Need color opinions for button^^</h3>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-evenly items-center text-foreground'>
                <h1>Start Your Journey to a Safer Food Experience</h1>
                <div className='flex flex-row items-center mb-5'>
                    <Button>
                        <Image 
                            alt='google logo'
                            src={googleImg}
                            width={15}
                            height={15}
                        />
                    </Button>
                </div>
                <h3> Need color opinions for button ^^</h3>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='First Name'
                        value={userNameFirst}
                        onChange={(e) => setUserNameFirst(e.target.value)}
                        onClear={() => {setUserNameFirst('')}}
                    />
                </div>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='Last Name'
                        value={userNameLast}
                        onChange={(e) => setUserNameLast(e.target.value)}
                        onClear={() => {setUserNameLast('')}}
                    />
                </div>
                <div className='flex flex-row items-center mb-5'>
                    <Input
                        type='text'
                        isRequired
                        isClearable
                        underlined
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onClear={() => {setEmail('')}}
                    />
                </div>
                <div>
                    <Button
                        variant='shadow'
                        className='bg-secondary-warm-orange text-black'
                        radius='full'
                        size='md'
                        isLoading={isLoading}
                        onClick={() => handleSignUp()}
                        spinner={<Spinner color='secondary' />}
                        isDisabled={false}
                    >
                        Submit
                    </Button>
                </div>
                    <h3> Need color opinions for button^^</h3>
            </div>
    );
}
