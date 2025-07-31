import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Features from './components/Features'
import Hero from './components/Hero'
import WaitlistCTA from './components/WaitlistCTA'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <WaitlistCTA />
    </div>
  )
}

export default App