import Nav from '../Nav'


export const metadata = {
    title: 'Our Story',
    description: 'We are a group of individuals who are passionate about helping others achieve their goals.',
  }

export default function OurStory() {

    return (
        <main className=' min-h-screen dark text-foreground bg-background'>
            <Nav />
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-4xl'>Our Story</h1>
                <p className='text-lg'>We are a group of individuals who are passionate about helping others achieve their goals.</p>
            </div>
        </main>
    )
}