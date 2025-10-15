import { useTaskContext } from "@/contexts/TaskContext/useTaskContext"

export default function CountDown() {
  const { state } = useTaskContext()
  return (
    <h2 className="text-center text-9xl text-accent-foreground font-bold">
      {state.formattedSecondsRemaining}
    </h2>
  )
}