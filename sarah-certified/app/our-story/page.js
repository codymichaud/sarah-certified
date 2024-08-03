import React from "react"
import Image from 'next/image'
import scspDark from '../../public/scsp-dark.png';

export default function OurStory() {

    return (
        <main className=' min-h-screen dark text-foreground bg-background'>
            <div className="flex flex-row">
                <div className='flex flex-col w-1/2 items-center justify-center h-screen ml-20'>
                    <h3 className='text-4xl'>Our Story</h3>
                    <p className='text-lg w-11/12'>Our journey began with a frightening incident – a hospital visit due to an unlisted ingredient. 
                    This experience, shared by me and my sisters, was a wake-up call. It led us to create Sarah Certified, a beacon of 
                    safety in the culinary world. Our mission is simple: to ensure that every meal out is a pleasure, free from the 
                    anxiety of allergen exposure.</p>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-center">
                    <Image
                        alt="SCSP"
                        src={scspDark}
                        width={500}
                        height={500}
                        className='ml-16'
                    />
                    <h3>**Picture of Sarah and Lizzy?**</h3>
                </div>
            </div>
        </main>
    )
}