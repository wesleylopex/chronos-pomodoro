import type { TaskState } from '@/types/task-state'
import { TaskActionTypes, type TaskActionModel } from './task-actions'
import { getNextCycle } from '@/utils/next-cycle'
import { formatSecondsToMinutes } from '@/utils/format-seconds-to-minutes'

export function taskReducer(state: TaskState, action: TaskActionModel): TaskState {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload
      const nextCycle = getNextCycle(state.currentCycle)
      const secondsRemaining = newTask.duration * 60

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask]
      }
    }
    case TaskActionTypes.STOP_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, interruptedDate: Date.now() }
          }
          return task
        })
      }
    }
    case TaskActionTypes.COUNT_DOWN: {
      const { secondsRemaining } = action.payload
      return {
        ...state,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining)
      }
    }
    case TaskActionTypes.COMPLETE_TASK: {
      if (!state.activeTask) {
        return state
      }

      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, completedDate: Date.now() }
          }
          return task
        })
      }
    }
    case TaskActionTypes.SAVE_SETTINGS: {
      const { workTime, shortBreakTime, longBreakTime } = action.payload

      return {
        ...state,
        settings: {
          workTime,
          shortBreakTime,
          longBreakTime
        }
      }
    }
    case TaskActionTypes.RESET_STATE: {
      return {
        ...state,

      }
    }
  }
  return state
}