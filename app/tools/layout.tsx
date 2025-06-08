import Sidebar, { Tile } from '@/components/layout/Sidebar'
import { FileJson } from 'lucide-react'

const tiles: Tile[] = [
  {
    title: 'Json Parser',
    href: '/library/posts',
    prefix: <FileJson />,
  },
]

export default function ToolsLayout({
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
