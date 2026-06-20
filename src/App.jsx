
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import TopBar from './Components/TopBar'
import Header from './Components/header'
import PortfolioSections from './Components/PortfolioSections'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false)
    }, 3500)

    return () => window.clearTimeout(introTimer)
  }, [])

  if (showIntro) {
    return (
      <div className="intro-screen">
        <DotLottieReact
          src="/animations/hello.lottie"
          loop
          autoplay
          className="intro-animation"
        />

        <button
          className="intro-skip"
          type="button"
          onClick={() => setShowIntro(false)}
        >
          Skip
        </button>
      </div>
    )
  }

  return (
    <>
      <TopBar />
      <Header />
      <PortfolioSections />
    </>
  )
}

export default App
