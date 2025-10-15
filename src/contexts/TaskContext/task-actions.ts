import type { Task } from '@/types/task'

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  STOP_TASK = 'STOP_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  SAVE_SETTINGS = 'SAVE_SETTINGS'
}

export type TaskActionModel = {
  type: TaskActionTypes.START_TASK,
  payload: Task
} | {
  type: TaskActionTypes.STOP_TASK
} | {
  type: TaskActionTypes.RESET_STATE
} | {
  type: TaskActionTypes.COUNT_DOWN,
  payload: { secondsRemaining: number }
} | {
  type: TaskActionTypes.COMPLETE_TASK
} | {
  type: TaskActionTypes.SAVE_SETTINGS,
  payload: {
    workTime: number
    shortBreakTime: number
    longBreakTime: number
  }
}
