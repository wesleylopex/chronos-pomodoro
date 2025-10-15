import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import { Toaster } from './components/ui/sonner.tsx'

import Home from './pages/Home/index.tsx'
import History from './pages/History/index.tsx'
import NotFound from './pages/NotFound/index.tsx'

import './styles/global.css'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Toaster position='top-center' />
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopOnRouteChange />
        </BrowserRouter>
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default App
