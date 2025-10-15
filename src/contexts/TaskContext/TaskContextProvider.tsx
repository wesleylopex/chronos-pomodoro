import { useEffect, useReducer, useRef } from 'react'
import { initialTaskState } from './initial-task-state'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { TimerWorkerManager } from '@/workers/TimerWorkerManager'
import { TaskActionTypes } from './task-actions'
import { loadBeep } from '@/utils/load-beep'

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer,initialTaskState)
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

  const worker = TimerWorkerManager.getInstance()

  worker.onMessage(event => {
    const countDownSeconds = event.data as number

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current()
        playBeepRef.current = null
      }

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
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep()
    } else {
      playBeepRef.current = null
    }
  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
