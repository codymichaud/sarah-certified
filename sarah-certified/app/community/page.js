import Nav from '../Nav'


export const metadata = {
    title: 'community',
    description: 'Our community is dedicated to helping individuals achieve their goals',
  }

export default function Community() {

    return (
        <main className=' min-h-screen dark text-foreground bg-background'>
            <Nav />
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className="text-3xl">Join Our Allergy-Safe Dining Community</h1>
                <h2 className="text-xl">Together, We&apos;re Creating safr Dining Experiences for Everyone</h2>
            </div>
        </main>
    )
}