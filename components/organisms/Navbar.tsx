import { NAV_LINKS } from "@/constants";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";

export function Navbar() {
  return (
    <nav
      className={`h-[8vh] w-full text-primary flex flex-row justify-between items-center border-b-2 relative z-30 py-0.1 px-4`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" height={25} width={200} />
      </Link>
      <ul className="hidden gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="
            flex flex-row justify-center items-center gap-2
            text-primary cursor-pointer pb-1.5 
            transition-all duration-200 ease-in-out 
            hover:font-bold hover:border-b-2
            "
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </ul>

      <div
        className={`text-primary lg:flex flex-row justify-evenly items-center gap-5 `}
      >
        {/* <Button type="button" title="Login" variant="btn_dark_green" /> */}
        <SignedOut>
          <SignInButton>
            <Button className="bg-orange-300">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <Menu
        className="text-primary inline-block cursor-pointer lg:hidden"
        height={32}
        width={32}
      />
    </nav>
  );
}

export default Navbar;
