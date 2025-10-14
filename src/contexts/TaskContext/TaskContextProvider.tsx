import { useEffect, useState } from 'react'
import { initialTaskState } from './initial-task-state'
import { TaskContext } from './TaskContext'

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialTaskState)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  )
}
