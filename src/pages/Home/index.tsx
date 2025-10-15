import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import CountDown from '@/components/CountDown'
import MainForm from '@/components/MainForm'

export default function Home () {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-xl mx-auto px-10 md:px-0 py-10">
        <Logo />
        <div className="mt-10">
          <Menu />
        </div>
        <div className="mt-16">
          <CountDown />
        </div>
        <div className="mt-16">
          <MainForm />
        </div>
      </div>
    </div>
  )
}