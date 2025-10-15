import { useEffect, useReducer } from 'react'
import { initialTaskState } from './initial-task-state'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { TimerWorkerManager } from '@/workers/TimerWorkerManager'
import { TaskActionTypes } from './task-actions'

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer,initialTaskState)

  const worker = TimerWorkerManager.getInstance()

  worker.onMessage(event => {
    console.log(event.data)

    const countDownSeconds = event.data as number

    if (countDownSeconds <= 0) {
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK
      })
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      })
    }
  })

  useEffect(() => {
    if (!state.activeTask) {
      console.log('No active task, terminating worker.')
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
