import { useEffect, useReducer } from 'react'
import { initialTaskState } from './initial-task-state'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer,initialTaskState)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
