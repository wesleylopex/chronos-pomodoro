import Logo from './components/Logo'
import Menu from './components/Menu'

import './styles/theme.css'
import './styles/global.css'

function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-gray-100">
      <div className="w-full max-w-xl mx-auto px-10 md:px-0 py-10">
        <Logo />
        <div className="mt-10">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default App
