import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'

export default function CountDown() {
  const { state } = useTaskContext()
  return (
    <h2 className="text-center text-6xl md:text-8xl lg:text-8xl font-bold">
      {state.formattedSecondsRemaining}
    </h2>
  )
}