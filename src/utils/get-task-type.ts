import type { Task } from '@/types/task'

export function getTaskType (type: Task['type']) {
  const types = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curta',
    longBreakTime: 'Descanso longo'
  }
  return types[type]
}