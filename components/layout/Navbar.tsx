import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from '../common/Button'
import { Menu } from 'lucide-react'
export interface NavbarProps {}

export default function Navbar() {
  return (
    <nav className="flexBetween items-center max-container padding-container relative z-30 py-2">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" height={50} width={200} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/logo.svg" variant="btn_dark_green" />
      </div>

      <Menu className="text-black inline-block cursor-pointer lg:hidden" height={32} width={32} />
    </nav>
  )
}
