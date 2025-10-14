import type { Task } from '@/types/task'

export function getNextCycle (currentCycle: number): number {
  if (currentCycle === 0 || currentCycle === 8) {
    return 1
  }

  return currentCycle + 1
}

export function getNextCycleType (cycle: number): Task['type'] {
  if (cycle % 8 === 0) return 'longBreakTime'
  if (cycle % 2 === 0)  return 'shortBreakTime'
  return 'workTime'
}