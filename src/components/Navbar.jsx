import { useState } from 'react'
import { Menu, X, Home, Store, Users, Star, CalendarDays, Newspaper, BarChart3, Shield, LogIn } from 'lucide-react'

const links = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'items', label: 'Item Prices', icon: Store },
  { key: 'staff', label: 'Staff-Team', icon: Users },
  { key: 'vote', label: 'Vote', icon: Star },
  { key: 'events', label: 'Events', icon: CalendarDays },
  { key: 'blog', label: 'Blog', icon: Newspaper },
  { key: 'apply', label: 'Apply', icon: LogIn },
  { key: 'stats', label: 'Stats', icon: BarChart3 },
  { key: 'dashboard', label: 'Staff-Dashboard', icon: Shield },
]

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500" />
            <div className="text-lg font-bold tracking-tight">EZBuilds</div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {links.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${active === key ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {links.map(({ key, label }) => (
              <button key={key} onClick={() => { onNavigate(key); setOpen(false) }} className={`px-3 py-2 rounded-md text-left text-sm ${active === key ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
