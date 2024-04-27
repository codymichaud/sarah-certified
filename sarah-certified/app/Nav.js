'use client';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
} from "@nextui-org/react";
import React, { useState } from "react";
import scspLogo from '../public/scsp-logo.png';
import Image from 'next/image'
import PropTypes from 'prop-types';

export default function Nav() {
  
    return (
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
              <Link color="foreground" href="/our-story">
                Our Story
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/certification">
                Certification
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/community">
                Community
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/contact-us">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link onPress={() => {
                // setLoginClicked(true)
                // console.log(props)
              }} color="foreground" href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button className="bg-secondary-blue" href="#" radius="full">
                Join Our Community
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
    )
}

Nav.propTypes = {
  setLoginClicked: PropTypes.func,
};