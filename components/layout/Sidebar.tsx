import { Inter } from 'next/font/google'
import Link from 'next/link'

export interface Tile {
  prefix?: React.ReactNode
  title: string
  href: string
}

export interface SidebarProps {
  tiles: Tile[]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function Sidebar({ tiles }: SidebarProps) {
  return (
    <aside
      className={`min-h-screen w-1/6 
      bg-gray-10 text-foreground
      border-r-2 border-gray-200 
      text-[1.2rem]
      ${inter.variable}
      `}
    >
      <ul className="space-y-4">
        {tiles.map((tile, index) => (
          <li key={index} className="py-4 px-2 hover:bg-slate-100">
            <Link href={tile.href} className="flex gap-2 flex-row  justify-start items-center px-2">
              {tile.prefix}
              {tile.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
