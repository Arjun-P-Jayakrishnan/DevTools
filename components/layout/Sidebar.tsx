import Link from 'next/link'

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="w-60 bg-background text-foreground border-r border-border min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="block hover:text-primary">
            Dashboard Home
          </Link>
        </li>
        <li>
          <Link href="/dashbaord/profile" className="block hover:text-primary">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="block hover:text-primary">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  )
}
