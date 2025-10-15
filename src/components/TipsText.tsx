import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'
import { getNextCycle, getNextCycleType } from '@/utils/next-cycle'

export default function TipsText() {
  const { state } = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  const activeTaskTips = {
    workTime: `Foque por ${state.settings.workTime} min`,
    shortBreakTime: `Descanse ${state.settings.shortBreakTime} min`,
    longBreakTime: `Descanso longo`,
  }

  const noActiveTaskTips = {
    workTime: `Próximo ciclo é de ${state.settings.workTime} min`,
    shortBreakTime: `Próximo descanso é de ${state.settings.shortBreakTime} min`,
    longBreakTime: `Próximo descanso será longo`
  }
  return (
    <p className="mt-10 text-center text-sm font-medium text-accent-foreground">
      {state.activeTask && activeTaskTips[state.activeTask.type]}
      {!state.activeTask && noActiveTaskTips[nextCycleType]}
    </p>
  )
}