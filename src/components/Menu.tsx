import { History, Home, Moon, Settings, Sun } from 'lucide-react'

import { useTheme } from './theme-provider'

export default function Menu() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="flex items-center justify-center gap-4">
      <a href="#" className="">
        <div className="p-3 rounded-md bg-primary">
          <Home size={24} />
        </div>
      </a>
      <a href="#" className="">
        <div className="p-3 rounded-md bg-primary">
          <History size={24} />
        </div>
      </a>
      <a href="#" className="">
        <div className="p-3 rounded-md bg-primary">
          <Settings size={24} />
        </div>
      </a>
      <div onClick={toggleTheme} className="p-3 rounded-md bg-primary">
        {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
      </div>
    </nav>
  )
}