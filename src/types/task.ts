export type Task = {
  id: string
  name: string
  duration: number // in minutes
  startDate: number
  completedDate: number | null
  interruptedDate: number | null
  type: 'work' | 'break'
}