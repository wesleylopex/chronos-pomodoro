import type { TaskState } from '@/types/task-state'

export const initialTaskState: TaskState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '25:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1
  }
}