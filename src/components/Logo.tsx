import { Timer } from 'lucide-react'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/" className="text-primary flex flex-col items-center gap-4">
      <Timer size={64} />
      <h1 className="text-4xl font-black text-center">
        Chronos
      </h1>
    </Link>
  )
}