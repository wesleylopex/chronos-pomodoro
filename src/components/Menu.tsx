import { History, Home, Settings, Sun } from 'lucide-react'
import { Button } from './ui/button'

export default function Menu() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <a href="#" className="text-gray-300 hover:text-white">
        <Button size="lg" className="bg-green-800">
          <Home />
        </Button>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <Button size="lg" className="bg-green-800">
          <History />
        </Button>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <Button size="lg" className="bg-green-800">
          <Settings />
        </Button>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <Button size="lg" className="bg-green-800">
          <Sun />
        </Button>
      </a>
    </nav>
  )
}