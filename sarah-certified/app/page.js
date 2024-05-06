import React from "react";
import {
  Spacer,
} from "@nextui-org/react";
import Image from 'next/image'
import scspDark from '../public/scsp-dark.png';


 

export default function Home() {
  // const [loginClicked, setLoginClicked] = React.useState(false);

  // const loginModal = () => {
  //   alert('Login Modal')
  //   // return (

  //   // )
  // }

  // if (loginClicked) {
  //   loginModal()
  // }   
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

      </main>
  );
}
