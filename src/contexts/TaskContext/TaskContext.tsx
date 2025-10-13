import { createContext } from 'react'
import type { TaskState } from '@/types/task-state'
import { initialTaskState } from './initial-task-state'

type TaskContextProps = {
  state: TaskState
  setState: React.Dispatch<React.SetStateAction<TaskState>>
} 

const initialContextValue = {
  state: initialTaskState,
  setState: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)
