import type { TaskState } from '@/types/task-state'

export const initialTaskState: TaskState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '10:00',
  activeTask: null,
  currencyCycle: 1,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}