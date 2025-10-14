import type { Task } from './task'

export type TaskState = {
  tasks: Task[]
  secondsRemaining: number
  formattedSecondsRemaining: string
  activeTask: Task | null
  currentCycle: number // 1 to 8
  config: {
    workTime: number
    shortBreakTime: number
    longBreakTime: number
  }
}