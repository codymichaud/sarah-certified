import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
} from "@nextui-org/react";
import scspLogo from '../public/scsp-logo.png';
import Image from 'next/image'

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
              <Link color="foreground" href="#">
                Certification
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Community
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="#">Login</Link>
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