import type { Task } from '@/types/task'

export function getTaskStatus (task: Task, activeTask: Task | null) {
  if (task.completedDate) return 'Concluído'
  if (task.interruptedDate) return 'Interrompido'
  if (task.id === activeTask?.id) return 'Em andamento'
  return 'Abandonada'
}