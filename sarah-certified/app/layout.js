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
  ModalFooter
} from "@nextui-org/react";
import React, { useState } from "react";
import scspLogo from '../public/scsp-logo.png';
import Image from 'next/image'
import { useRouter } from "next/navigation";
// import { Analytics } from "@vercel/analytics/react"
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loginClicked, setLoginClicked] = useState(false);

  const router = useRouter();

  const openModal = () => {
    console.log('open modal')

    return (
      <Modal>
        <ModalHeader>Login</ModalHeader>
        <ModalContent>

        </ModalContent>
        <ModalFooter>
          <Button>
            Sign Up
          </Button>
          <Button>
            Cancel
          </Button>
          <Button>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    )
  }

  return (
    // <Analytics>
        <html lang="en">
          <link
            rel="icon"
            href='/scsp-logo.png'
            type="image/x-icon"
            sizes="16x16"
          />
          <body className={`${inter.className} min-h-screen dark text-foreground bg-background`}>
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
              {!loginClicked ? (
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link className="hover:text-secondary-blue" onPress={() => {
                    setLoginClicked(true)
                    console.log('login clicked')
                  }} color="foreground" href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                  <Button className="bg-secondary-blue text-background" onPress={() => {
                    router.push('/join-us')
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
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
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
            {children}
          </body>
        </html>
    // </Analytics>
  );
}
