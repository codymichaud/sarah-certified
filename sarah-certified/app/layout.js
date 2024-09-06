'use client';

import { Inter } from "next/font/google";
import "./globals.css";import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import scspLogo from '../public/scsp-logo.png';
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/react"
import { NextUIProvider } from "@nextui-org/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { signIn } from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loginClicked, setLoginClicked] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const router = useRouter();

  // React.useEffect(() => {
  //   console.log('router', router)
  // }, [])

  return (
    <html className='dark' lang="en">
          <head>
            <title>Sarah Certified</title>
            <link
              rel="icon"
              href='/scsp-logo.png'
              type="image/x-icon"
              sizes="16x16"
              />
          </head>
          <body className={`${inter.className} min-h-screen dark text-foreground bg-background`}>
              <Analytics />
              <SpeedInsights />
              <NextUIProvider>
              <Navbar
                  maxWidth="full"
                  className="bg-black"
                >
                  <NavbarBrand className="">
                    {/* <AcmeLogo /> */}
                    <Link href="/">
                      <Image
                        alt="SCSP"
                        src={scspLogo}
                        width={100}
                        height={100}
                      />
                    </Link>
                    {/* <p className="font-bold text-inherit">SCSP</p> */}
                  </NavbarBrand>
                  <NavbarContent className="hidden sm:flex gap-12" justify="center">
                    <NavbarItem>
                      <Link className="hover:text-secondary-blue" color="foreground" href="/our-story">
                        Our Story
                      </Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link className="hover:text-secondary-blue" color="foreground" href="/certification">
                        Certification
                      </Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link className="hover:text-secondary-blue" color="foreground" href="/community">
                        Community
                      </Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link className="hover:text-secondary-blue" color="foreground" href="/contact-us">
                        Contact Us
                      </Link>
                    </NavbarItem>
                  </NavbarContent>
                  {!loginClicked  ? (
                  <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                      <Link className="hover:text-secondary-blue" onPress={async () => {
                        // signIn('google');
                        setLoginClicked(true);
                      }} color="foreground" href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Button className="bg-secondary-blue text-background" onPress={() => {
                        router.push('/sign-up')
                      }} radius="full">
                        Join Our Community
                      </Button>
                    </NavbarItem>
                    
                  </NavbarContent>
                  ) : (
                  <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <Avatar
                          isBordered
                          as="button"
                          className="transition-transform"
                          color="secondary"
                          name="Jason Hughes"
                          size="sm"
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          <p className="font-semibold">Signed in as</p>
                          <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="team_settings">My Profile</DropdownItem>
                        <DropdownItem key="analytics">Restaraunts</DropdownItem>
                        <DropdownItem key="system">Allergies</DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem onPress={() => {
                          setLoginClicked(false)
                        }} key="logout" color="danger">
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavbarContent>
                  )}
                </Navbar>
                {loginClicked && (
                  <Modal 
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange}
                    backdrop='opaque'
                    classNames={{
                      backdrop: 'bg-gradient-to-t from-secondary-blue/20 to-background backdrop-opacity-5'
                    }}
                  >
                    <ModalHeader className='flex flex-col gap-1'>
                      Login
                    </ModalHeader>
                    <ModalContent>
                      Login Here
                    <ModalFooter>
                      <Button>
                        Sign Up
                      </Button>
                      <Button onPress={() => {
                        onClose()
                      }}>
                        Cancel
                      </Button>
                      <Button>
                        Login
                      </Button>
                    </ModalFooter>
                    </ModalContent>
                  </Modal>
                )}
                {children}
            </NextUIProvider>
          </body>
        </html>

  );
}

