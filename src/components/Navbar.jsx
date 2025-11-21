import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Initialize dark mode based on preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-slate-900 dark:text-white text-lg">
          Venkata Sai Yandeti
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              {item.label}
            </a>
          ))}
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700" />
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#contact" aria-label="Email" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
            <Mail className="w-5 h-5" />
          </a>
          <button onClick={toggleDark} aria-label="Toggle theme" className="rounded-md border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700 dark:text-slate-200">
              {item.label}
            </a>
          ))}
          <button onClick={toggleDark} className="mt-2 inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-700 dark:text-slate-200">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} Toggle theme
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
