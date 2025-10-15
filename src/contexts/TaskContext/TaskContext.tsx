import { createContext } from 'react'
import type { TaskState } from '@/types/task-state'
import { initialTaskState } from './initial-task-state'
import type { TaskActionModel } from './task-actions'

type TaskContextProps = {
  state: TaskState
  dispatch: React.Dispatch<TaskActionModel>
} 

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)
