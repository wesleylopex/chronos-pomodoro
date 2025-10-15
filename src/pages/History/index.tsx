import { Trash } from 'lucide-react'

import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

import { getTaskType } from '@/utils/get-task-type'
import { getTaskStatus } from '@/utils/get-task-status'
import { TaskActionTypes } from '@/contexts/TaskContext/task-actions'
import EmptyList from '@/components/EmptyList'

export default function History () {
  const { state, dispatch } = useTaskContext()
  const sortedTasks = [...state.tasks].sort((a, b) => b.startDate - a.startDate)

  function handleDeleteHistory() {
    dispatch({ type: TaskActionTypes.RESET_STATE })
  }

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-2xl mx-auto px-10 md:px-0 py-10">
        <Logo />
        <div className="mt-10">
          <Menu />
        </div>
        <div className="mt-10">
          {state.tasks.length === 0 ? <EmptyList /> : (
            <>
              <div className="flex justify-end">
                <Button onClick={handleDeleteHistory} variant="outline" aria-label="Apagar histórico" title="Apagar histórico">
                  <Trash />
                </Button>
              </div>
              <Table className="mt-5">
                <TableHeader>
                  <TableRow>
                    <TableHead>Tarefa</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tipo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTasks.map(task => (
                    <TableRow key={task.id}>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.duration} min</TableCell>
                      <TableCell>
                        {new Date(task.startDate).toLocaleString('pt-br', {
                          dateStyle: 'short',
                          timeStyle: 'short'
                        })}
                      </TableCell>
                      <TableCell>{getTaskStatus(task, state.activeTask)}</TableCell>
                      <TableCell>{getTaskType(task.type)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </div>
      </div>
    </div>
  )
}