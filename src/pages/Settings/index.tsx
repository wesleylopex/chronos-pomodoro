import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Save } from 'lucide-react'

import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { notify } from '@/adapters/sonner-adapter'
import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'
import { TaskActionTypes } from '@/contexts/TaskContext/task-actions'

const formSchema = z.object({
  workTime: z.string()
    .min(1, 'Defina o seu tempo de foco')
    .refine(n => +n > 10, {
      message: 'Foco deve ser maior que 10 min'
    }),
  shortBreakTime: z.string()
    .min(1, 'Defina o seu tempo de descanso curto')
    .refine(n => +n > 0, {
      message: 'Descanso curto deve ser maior que zero'
    }),
  longBreakTime: z.string()
    .min(1, 'Defina o seu tempo de descanso longo')
    .refine(n => +n >= 5, {
      message: 'Descanso longo deve ser maior que 5 min'
    })
})

type FormType = z.infer<typeof formSchema>

export default function Settings () {
  const { state, dispatch } = useTaskContext()

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workTime: state.settings.workTime.toString(),
      shortBreakTime: state.settings.shortBreakTime.toString(),
      longBreakTime: state.settings.longBreakTime.toString()
    }
  })

  function onSubmit (data: FormType) {
    dispatch({
      type: TaskActionTypes.SAVE_SETTINGS,
      payload: {
        workTime: +data.workTime,
        shortBreakTime: +data.shortBreakTime,
        longBreakTime: +data.longBreakTime
      }
    })

    notify.success('Configurações salvas com sucesso!')
  }

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-xl mx-auto px-10 md:px-0 py-10">
        <Logo />
        <div className="mt-10">
          <Menu />
        </div>
        <Card className="mt-10 w-full mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription>
              Defina o seu tempo de foco e descanso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="workTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempo de foco</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Defina o seu tempo de foco"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortBreakTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempo de descanso curto</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Defina o seu tempo de descanso curto"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longBreakTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempo de descanso longo</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Defina o seu tempo de descanso longo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  aria-label="Salvar configurações"
                  title="Salvar configurações"
                ><Save /></Button>
              </Form>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}