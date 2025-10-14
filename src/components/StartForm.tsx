import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Play } from 'lucide-react'

import { Button } from './ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import type { Task } from '@/types/task'
import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'
import { getNextCycle, getNextCycleType } from '@/utils/next-cycle'
import { formatSecondsToMinutes } from '@/utils/format-seconds-to-minutes'

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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-10 text-center text-sm font-medium text-gray-500">Nesse ciclo foque por 25 min</p>
        <div className="mt-10">
          <p className="text-center text-sm font-medium text-gray-500">Ciclos</p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="size-4 bg-green-600 rounded-full"></div>
            <div className="size-4 bg-yellow-500 rounded-full"></div>
            <div className="size-4 bg-green-600 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full max-w-40 mx-auto mt-10"><Play /></Button>
        </div>
      </form>
    </Form>
  )
}