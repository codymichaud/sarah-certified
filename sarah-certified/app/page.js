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


export default function Home() {
  return (
    <NextUIProvider>
      <main className=" min-h-screen dark text-foreground bg-background">
        <Nav />
      </main>
    </NextUIProvider>
  );
}
