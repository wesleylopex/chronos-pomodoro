import gravitationalBeep from '../assets/audios/gravitational_beep.mp3'

export function loadBeep () {
  const audio = new Audio(gravitationalBeep)

  return () => {
    audio.currentTime = 0
    audio.play().catch(err => console.log('Audio play error:', err))
  }
}