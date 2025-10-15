import type { Task } from '@/types/task'

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  STOP_TASK = 'STOP_TASK',
  RESET_STATE = 'RESET_STATE'
}

export type TaskActionModel = {
  type: TaskActionTypes.START_TASK,
  payload: Task
} | {
  type: TaskActionTypes.STOP_TASK
} | {
  type: TaskActionTypes.RESET_STATE
}
