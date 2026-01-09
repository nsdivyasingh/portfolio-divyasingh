import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Research from './components/Research'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuroraBackground from './components/AuroraBackground'
import CursorGlow from './components/CursorGlow'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackground />
      <CursorGlow mousePosition={mousePosition} />
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Research />
      <Blog />
      <Contact />
    </div>
  )
}

export default App

