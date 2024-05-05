import {
    Card,
    CardBody,
    Input,
    Button,
} from '@nextui-org/react'


export const metadata = {
    title: 'Contact Us',
    description: 'Contact Us',
  }

export default function ContactUs() {

    return (
        <main className=''>
            <div className='h-screen flex flex-row justify-evenly grid-cols-2 columns-xl'>
                <div className='flex flex-col items-start justify-start mt-32'>
                    <div className='mr-32'>
                        <h1 className="text-3xl mb-5">We&apos;re Here for You</h1>
                        <h4 className="text-xl">Connect With Sarah Certified - Where Compassion Meets Action</h4>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center w-96'>
                        <Input
                            placeholder=""
                            type='text'
                            label="Name"
                            width="100%"
                            className='mt-6'
                        />
                        <Input
                            placeholder=""
                            label="Email"
                            type='email'
                            width="100%"
                            className='mt-8'
                        />
                        <Input
                            placeholder=""
                            type='tel'
                            label="Phone"
                            width="100%"
                            className='mt-8'
                        />
                        <Button className='mt-12 bg-secondary-blue text-background'>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}