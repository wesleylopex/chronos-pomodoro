import { ThemeProvider } from '@/components/theme-provider'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import Logo from './components/Logo'
import Menu from './components/Menu'
import CountDown from './components/CountDown'
import StartForm from './components/StartForm'

import './styles/global.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TaskContextProvider>
        <div className="min-h-screen">
          <div className="w-full max-w-xl mx-auto px-10 md:px-0 py-10">
            <Logo />
            <div className="mt-10">
              <Menu />
            </div>
            <div className="mt-10">
              <CountDown />
            </div>
            <div className="mt-10">
              <StartForm />
            </div>
          </div>
        </div>
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default App
