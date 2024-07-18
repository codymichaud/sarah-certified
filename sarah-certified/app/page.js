'use client'

import React from "react";
import {
  Spacer,
  Divider,
  Button,
} from "@nextui-org/react";
import Image from 'next/image'
import scspDark from '../public/scsp-dark.png';
import signUpQr from '../public/sign-up-qr.png';
import signUpQr2 from '../public/signUpQr.png';
import { useRouter } from "next/navigation";


 

export default function Home() {
  
  const router = useRouter();
  return (
      <main className="w-h-screen text-foreground">
          <div className="flex flex-col items-center justify-center mt-32 mb-16">
            <h1 className="text-3xl text-secondary-blue">Welcome to Sarah Certified</h1>
            <Spacer y={6} />
            <h4 className="text-xl max-w-3xl text-center text-wrap">Welcome to Sarah Certified, where we 
              transform the dining out experience for those with food allergies. In a world where food allergies 
              are increasingly common, the joy of dining out is often overshadowed by concerns for safety. We understand 
              because we&apos;ve been there.</h4>
          </div>
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <div className="flex items-start justify-center ml-16 mt-32 grid-cols-2 grid-flow-row">
            <div className="flex flex-col mr-48 mt-20">
              <h1 className="text-3xl text-secondary-blue">Our Story</h1>
              <Spacer y={6} />
              <h4 className="text-xl max-w-3xl text-left text-wrap">Welcome to Sarah Certified, where we 
                transform the dining out experience for those with food allergies. In a world where food allergies 
                are increasingly common, the joy of dining out is often overshadowed by concerns for safety. We understand 
                because we&apos;ve been there.
              </h4>
            </div>
            <div className="flex flex-row items-end justify-end ">
            <Image
              alt="SCSP"
              src={scspDark}
              width={400}
              height={400}
              className='ml-16'
            />
            </div>
          </div>
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-secondary-blue underline underline-offset-8 text-center">Our Solution</h1>
            <div className="flex flex-row items-start justify-center space-x-56 mt-10">
              <div className="flex flex-col items-center justify-center w-1/3">
                <h2 className="text-secondary-blue underline underline-offset-8 text-2xl mb-10">Comprehensive Certification</h2>
                <ul className="list-disc">
                  <li>Partnering with Restaraunts to implement a meticulous certification process</li>
                  <li>Training and systems to ensure effective communication amongst staff to maintain the highest standards of allergy safety</li>
                  <li>Emergency Contact Information</li>
                </ul>
              </div>
              <Divider orientation='vertical' className='h-72 mb-16'/>
              <div className="flex flex-col items-center justify-center w-1/3">
                <h2 className="text-secondary-blue underline underline-offset-8 text-2xl mb-10">Personalized QR Profiles</h2>
                <ul className="list-disc">
                  <li>Ability to dine discretely with our innovative QR profile system</li>
                  <li>Ability for restaraunts to have immediate access to allergy information</li>
                  <li>Ability to customize your personal profile to ensure accurate service without the uncomfortable allergy discussions</li>
                </ul>
              </div>
            </div>
          </div>
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <Spacer y={7} />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-start justify-center space-x-56 mt-10">
              <div className="flex flex-col items-center justify-center w-1/3">
              <Image
                alt="SCSP"
                src={signUpQr2}
                width={400}
                height={400}
                className='ml-16'
              />
              </div>
              <div className="flex flex-col items-center justify-center w-1/3">
                <h2 className="text-3xl">Ready to dine without fear?</h2>
                <h2>Sign Up now for your personalized allergy profile and become part of a community that&apos;s reshaping the dining landscape</h2>
                <h2>Stay updated with our list of certified restaurants and savor every meal, knowing your safety is our top priority</h2>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Button className="bg-secondary-blue" onPress={() => { router.push('/sign-up') }}>
                  Sign Up
                </Button>
              </div>

            </div>
          </div>

      </main>
  );
}
