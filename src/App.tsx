import { BrowserRouter, Route, Routes } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import { Toaster } from './components/ui/sonner.tsx'

import Home from './pages/Home/index.tsx'
import NotFound from './pages/NotFound/index.tsx'

import './styles/global.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Toaster position='top-center' />
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default App
