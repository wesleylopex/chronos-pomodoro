let isRunning = false

self.onmessage = function (event) {
  if (isRunning) return

  isRunning = true

  const { activeTask, secondsRemaining } = event.data
  const endDate = activeTask.startDate + secondsRemaining * 1000
  const now = Date.now()
  let countDownSeconds = Math.floor((endDate - now) / 1000)

  function tick () {
    self.postMessage(countDownSeconds)

    const now = Date.now()
    countDownSeconds = Math.floor((endDate - now) / 1000)

    setTimeout(tick, 1000)
  }

  tick()
}