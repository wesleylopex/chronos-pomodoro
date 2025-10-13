import { History, Home, Settings, Sun } from 'lucide-react'

export default function Menu() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <a href="#" className="text-gray-300 hover:text-white">
        <div className="p-3 rounded-md bg-green-800">
          <Home size={24} />
        </div>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <div className="p-3 rounded-md bg-green-800">
          <History size={24} />
        </div>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <div className="p-3 rounded-md bg-green-800">
          <Settings size={24} />
        </div>
      </a>
      <a href="#" className="text-gray-300 hover:text-white">
        <div className="p-3 rounded-md bg-green-800">
          <Sun size={24} />
        </div>
      </a>
    </nav>
  )
}