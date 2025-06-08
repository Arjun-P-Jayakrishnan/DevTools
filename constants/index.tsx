import { Library, PhoneCall, Ticket, Wrench } from 'lucide-react'

export const NAV_LINKS = [
  { href: '/library', key: 'library', label: 'Library', icon: <Library /> },
  { href: '/planner', key: 'planner', label: 'Planner', icon: <Ticket /> },
  { href: '/tools', key: 'tools', label: 'Tools', icon: <Wrench /> },
  { href: '/contact', key: 'contact', label: 'Contact', icon: <PhoneCall /> },
]
