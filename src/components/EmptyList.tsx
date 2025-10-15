
import { BrushCleaning } from 'lucide-react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty'

export default function EmptyList() {
  return (
    <Empty className="w-full mx-auto max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BrushCleaning />
        </EmptyMedia>
        <EmptyTitle>Sem dados</EmptyTitle>
        <EmptyDescription>Nenhum registro encontrado</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        Inicie uma nova tarefa para começar a registrar seu histórico.
      </EmptyContent>
    </Empty>
  )
}