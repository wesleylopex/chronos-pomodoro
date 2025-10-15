import { useTaskContext } from '@/contexts/TaskContext/useTaskContext'
import { getNextCycle, getNextCycleType } from '@/utils/next-cycle'

export default function Cycles() {
  const { state } = useTaskContext()

  const cycleStep = Array.from({ length: state.currentCycle })

  const classByCycleType = {
    workTime: 'bg-yellow-500',
    shortBreakTime: 'bg-green-600',
    longBreakTime: 'bg-blue-600'
  } as const

  const cycleDescription = {
    workTime: 'Ciclo de foco',
    shortBreakTime: 'Pausa curta',
    longBreakTime: 'Pausa longa'
  }

  return (
    <>
      <p className="text-center text-sm font-medium text-gray-500">Ciclos</p>
      <div className="mt-4 flex justify-center items-center gap-2">
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle)
          return (
            <span
              key={nextCycle}
              className={`size-4 rounded-full ${classByCycleType[nextCycleType]}`}
              aria-label={cycleDescription[nextCycleType]}
              title={cycleDescription[nextCycleType]}
            ></span>
          )
      })}
      </div>
    </>
  )
}