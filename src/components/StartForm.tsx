import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Play, Square } from 'lucide-react'

import { Button } from './ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import type { Task } from '@/types/task'
import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'
import { getNextCycle, getNextCycleType } from '@/utils/next-cycle'
import { formatSecondsToMinutes } from '@/utils/format-seconds-to-minutes'
import Cycles from './Cycles'

const formSchema = z.object({
  task: z.string().min(1, 'Preencha a task'),
})

type FormType = z.infer<typeof formSchema>

export default function StartForm() {
  const { state, setState } = useTaskContext()
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: ''
    }
  })

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function onSubmit(data: FormType) {
    const newTask: Task = {
      id: Date.now().toString(),
      name: data.task,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60

    setState(prev => ({
      ...prev,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prev.tasks, newTask]
    }))
  }

  function handleStopTask() {
    setState(prev => ({
      ...prev,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
      tasks: prev.tasks.map(task => {
        if (task.id === prev.activeTask?.id) {
          return { ...task, interruptedDate: Date.now() }
        }
        return task
      })
    }))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem className="w-full mx-auto max-w-xs">
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input
                  placeholder="Defina a sua tarefa"
                  {...field}
                  disabled={!!state.activeTask}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-10 text-center text-sm font-medium text-gray-500">Nesse ciclo foque por 25 min</p>
        {state.currentCycle > 0 && (
          <div className="mt-10">
            <Cycles />
          </div>
        )}
        <div className="flex justify-center">
          {!state.activeTask && (
            <Button
              type="submit"
              aria-label="Iniciar tarefa"
              title="Iniciar tarefa"
              className="w-full max-w-40 mx-auto mt-10"
              key="start-task-button"
            ><Play /></Button>
          )}

          {state.activeTask && (
            <Button
              type="button"
              variant="destructive"
              onClick={handleStopTask}
              aria-label="Parar tarefa"
              title="Parar tarefa"
              className="w-full max-w-40 mx-auto mt-10"
              key="stop-task-button"
            ><Square /></Button>
          )}
        </div>
      </form>
    </Form>
  )
}