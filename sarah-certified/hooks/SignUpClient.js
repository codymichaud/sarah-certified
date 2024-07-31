'use client';

import React from 'react';
import useGetWindow from './useGetWindow';
import {
    Input,
} from "@nextui-org/input";


export default function SignUpClient() {
    const windowInfo = useGetWindow();
    const [usableWindowInfo, setUsableWindowInfo] = React.useState(null);
    const [userNameFirst, setUserNameFirst] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userNameLast, setUserNameLast] = React.useState('');
    const [phoneNum, setPhoneNum] = React.useState('');

    React.useEffect(() => {
        if (windowInfo && usableWindowInfo === null) {
            console.log('windowWidth', windowInfo);
            setUsableWindowInfo(windowInfo);
        }
    }, [windowInfo, usableWindowInfo]);

    console.log('usableWindowInfo', (usableWindowInfo && usableWindowInfo.windowSize.width < 767));
    if (usableWindowInfo && usableWindowInfo.windowSize.width < 767) {
        return (
            <div className='flex flex-col justify-evenly items-center w-h-screen text-foreground'>
                <h1>Join SCSP!!</h1>
                <div className='flex flex-row items-center'>
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
                <div className='flex flex-row items-center'>
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
                <div className='flex flex-row items-center'>
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
                <div className='flex flex-row items-center'>
                    <Input
                        type='text'
                        isClearable
                        underlined
                        label='Phone Number'
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        onClear={() => {setPhoneNum('')}}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className='w-h-screen text-foreground'>some sign up stuff</div>
    );
}
