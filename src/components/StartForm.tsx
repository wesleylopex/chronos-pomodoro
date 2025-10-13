import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from './ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Play } from "lucide-react"

const formSchema = z.object({
  task: z.string().min(1, 'Preencha a task'),
})

export default function StartForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
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
        <p className="mt-10 text-center text-sm font-medium text-gray-400">Nesse ciclo foque por 25 min</p>
        <div className="mt-10">
          <p className="text-center text-sm font-medium text-gray-400">Ciclos</p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="size-4 bg-green-800 rounded-full"></div>
            <div className="size-4 bg-yellow-600 rounded-full"></div>
            <div className="size-4 bg-green-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full max-w-40 mx-auto mt-10 bg-green-800 hover:bg-green-900"><Play /></Button>
        </div>
      </form>
    </Form>
  )
}