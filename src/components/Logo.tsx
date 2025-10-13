import { Timer } from 'lucide-react'

export default function Logo() {
  return (
    <div className="text-primary flex flex-col items-center gap-4">
      <Timer size={64} />
      <h1 className="text-4xl font-black text-center">
        Chronos
      </h1>
    </div>
  )
}