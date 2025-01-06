import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import './App.css'
import SkillsSection from './components/Skills'
import Timelines from './components/Timeline'
import NavBar from './components/NavBar'
import Education from './components/Education'
import Separator from './components/Separator'

function App() {

  return (
    <>
      <header className="sticky z-10 top-0">
        <NavBar />
      </header>
      <main className='pt-16'>
        <Hero />
        <section>
          <Separator text={"Experience"}/>
          <Timelines />
        </section>
        <section>
        <Separator text={"Skills"}/>
        <SkillsSection />
        </section>
        <Education />
      </main>
    </>
  )
}

export default App
