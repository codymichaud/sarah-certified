import Nav from '../Nav'
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
        <main className=' min-h-screen dark text-foreground bg-background'>
            <Nav />
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className='flex flex-col items-center justify-start'>
                    <h1 className="text-3xl">We&apos;re Here for You</h1>
                    <h2 className="text-xl">Connect With Sarah Certified - Where Compassion Meets Action</h2>
                </div>
                <Card className='mt-16 w-96'>
                    <CardBody>
                        <h3 className='text-center'>Get in Touch!</h3>
                        <Input
                            placeholder=""
                            label="Name"
                            width="100%"
                            className='mt-6'
                        />
                        <Input
                            placeholder=""
                            label="Email"
                            width="100%"
                            className='mt-8'
                        />
                        <Button className='mt-12 bg-secondary-blue'>
                            Submit
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </main>
    )
}