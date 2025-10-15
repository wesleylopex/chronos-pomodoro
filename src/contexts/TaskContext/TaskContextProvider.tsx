import { useEffect, useReducer, useRef } from 'react'
import { initialTaskState } from './initial-task-state'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { TimerWorkerManager } from '@/workers/TimerWorkerManager'
import { TaskActionTypes } from './task-actions'
import { loadBeep } from '@/utils/load-beep'
import type { TaskState } from '@/types/task-state'

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const localData = localStorage.getItem('state') || null

    if (!localData) return initialTaskState

    const parsedData = JSON.parse(localData) as TaskState

    return {
      ...parsedData,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00'
    }
  })
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

  const worker = TimerWorkerManager.getInstance()

  worker.onMessage(event => {
    const countDownSeconds = event.data as number

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current()
        playBeepRef.current = null
      }

      dispatch({ type: TaskActionTypes.COMPLETE_TASK })
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      })
    }
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))

    if (!state.activeTask) {
      worker.terminate()
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`

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
