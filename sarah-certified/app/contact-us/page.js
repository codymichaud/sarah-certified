'use client';

import {
    Card,
    CardBody,
    Input,
    Button,
    Spacer,
    Divider,
} from '@nextui-org/react'
import React, { useState } from "react";
import Image from 'next/image'
import scspLogo from '../../public/scsp-logo.png';

export default function ContactUs() {
    const [submitted, setSubmitted] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const[ isInvalid, setIsInvalid] = React.useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    }

    const handleName = (name) => {
        setName(name);
    }

    // const addDashes = (f) => {
    //     var r = /(\D+)/g,
    //         npa = '',
    //         nxx = '',
    //         last4 = '';
    //     f.value = f.value.replace(r, '');
    //     npa = f.value.substr(0, 3);
    //     nxx = f.value.substr(3, 3);
    //     last4 = f.value.substr(6, 4);
    //     f.value = npa + '-' + nxx + '-' + last4;

    // }

    const handlePhoneNumber = (num) => {
        // addDashes(num)
        let phone = num.replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        setPhone(phone);
        // const phoneNumRegex = /^\d{3}-\d{3}-\d{4}$/;
        const regex = /^\d{3}-\d{3}-\d{4}$/;
        
        setIsInvalid(!regex.test(phone));
        return regex.test(phone);
        
    }

    const handleEmail = (email) => {
        setEmail(email);
    }

    return (
        <main className='w-h-screen text-foreground'>
            <div className='flex flex-row justify-evenly grid-cols-2 columns-xl'>
                <div className='flex flex-col items-start justify-start mt-32'>
                    <div className=' grid-cols-1 flex flex-col max-w-2xl text-wrap'>
                        <h1 className="text-3xl text-secondary-blue">We&apos;re Here for You</h1>
                        <Spacer y={6} />
                        <h4 className="text-xl">Connect With Sarah Certified - Where Compassion Meets Action</h4>
                        {/* <Spacer y={7} />
                        <Spacer y={7} />
                        <Spacer y={7} />
                        <div>
                            <h1 className='text-4xl text-secondary-blue'>Together, Making a Difference:</h1>
                            <Spacer y={6} />
                            <p>Each motivated by the desire to create a world where dining out is a joy, not a fear, 
                            they are the driving force behind Sarah Certified. Their dedication is a testament to 
                            the power of family, empathy, and unwavering commitment to a cause.</p>
                        </div>
                        <Spacer y={7}/>
                        <div>
                            <h1 className='text-4xl text-secondary-blue'>Reach Out to Us:</h1>
                            <Spacer y={6} />
                            <p>We&apos;d love to hear from you! Whether you have a question, need assistance, or simply 
                                want to share your story, our team is here to listen and help.</p>
                        </div> */}
                    </div>
                    <Image
                        alt="SCSP"
                        src={scspLogo}
                        width={500}
                        height={500}
                        className='mt-12 ml-16'
                    />
                </div>
                <div className='flex items-center content-start'>
                    <Divider orientation='vertical' className='h-96'/>
                </div>
                <div className='flex flex-col items-center justify-center mr-12'>
                    <div className='flex flex-col items-center justify-center w-96'>
                        <Input
                            isRequired
                            isClearable
                            type='text'
                            label="Name"
                            width="100%"
                            className='mt-6'
                            value={name}
                            onValueChange={handleName}
                        />
                        <Input
                            isRequired
                            isClearable
                            label="Email"
                            type='email'
                            width="100%"
                            value={email}
                            onValueChange={handleEmail}
                            className='mt-8'
                        />
                        <Input
                            isRequired
                            isClearable
                            type='tel'
                            label="Phone"
                            width="100%"
                            className='mt-8'
                            value={phone}
                            color={!phone ? '' : isInvalid ? "danger" : "success"}
                            errorMessage={isInvalid && "Please enter a valid phone number"}
                            isInvalid={isInvalid}
                            onValueChange={handlePhoneNumber}
                        />
                        <Button onPress={() => {
                            setSubmitted(true)
                            handleSubmit()
                        }} className='mt-12 bg-secondary-blue text-background'>
                            {submitted ? 'Submitted!' : 'Submit'}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}