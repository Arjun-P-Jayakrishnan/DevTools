import Sidebar, { Tile } from '@/components/layout/Sidebar'
import { FilePlus2, FileStack } from 'lucide-react'

const tiles: Tile[] = [
  {
    title: 'Posts',
    href: '/library/posts',
    prefix: <FileStack />,
  },
  {
    title: 'Create New',
    href: '/library/posts',
    prefix: <FilePlus2 />,
  },
]

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flexCenter flex-row">
      <Sidebar tiles={tiles} />
      {children}
    </div>
  )
}
