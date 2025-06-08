import { NAV_LINKS } from '@/constants'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// export interface NavbarProps {}

export default function Navbar() {
  return (
    <nav className="flexBetween border-b-2 items-center max-container padding-container relative z-30 py-2">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" height={50} width={200} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black 
            flex flex-row justify-center items-center gap-2 
            cursor-pointer pb-1.5 
            transition-all duration-200 ease-in-out 
            hover:font-bold hover:border-b-2 hover:text-[18px]
            "
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </ul>

      <div className={`text-[20px] text-black lg:flexCenter flex-row gap-5 items-center hidden`}>
        {/* <Button type="button" title="Login" variant="btn_dark_green" /> */}
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <Menu className="text-black inline-block cursor-pointer lg:hidden" height={32} width={32} />
    </nav>
  )
}
