import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import Nav from './Nav'
import scspLogo from '../public/scsp-logo.png';


 
export const metadata = {
  title: 'Sarah Certified',
  description: 'Sarah Certified is a group of individuals who are passionate about helping others achieve their goals.',
}

export default function Home() {
  const [loginClicked, setLoginClicked] = React.useState(false);

  const loginModal = () => {
    alert('Login Modal')
    // return (

    // )
  }

  if (loginClicked) {
    loginModal()
  }   
  return (
    <NextUIProvider>
      <main className=" min-h-screen dark text-foreground bg-background">
        <Nav setLoginClicked={setLoginClicked} />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl">Savor the Outing, Forget the Worry</h1>
          <h2 className="text-xl">Join the Sarah Certified Community and Dine with Confidence</h2>
        </div>

      </main>
    </NextUIProvider>
  );
}
