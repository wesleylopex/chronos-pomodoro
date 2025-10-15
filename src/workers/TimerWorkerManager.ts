import type { TaskState } from '@/types/task-state'

let instance: TimerWorkerManager | null = null

export class TimerWorkerManager {
  private worker: Worker

  private constructor() {
    this.worker = new Worker(new URL('./timer-worker.js', import.meta.url))
  }

  public static getInstance(): TimerWorkerManager {
    if (!instance) {
      instance = new TimerWorkerManager()
    }
    return instance
  }

  public postMessage(message: TaskState) {
    this.worker.postMessage(message)
  }

  public onMessage(handler: (event: MessageEvent) => void) {
    this.worker.onmessage = handler
  }

  public terminate() {
    this.worker.terminate()
    instance = null
  }
}