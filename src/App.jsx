import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import SkillsSection from './components/Skills'
import Timelines from './components/Timeline'
import NavBar from './components/NavBar'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Randoms from './components/Random'
import Footer from './components/Footer'
import EmailModal from './components/EmailModal'
import ScrollToTopButton from './components/ScrollToTopButton'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky z-50 top-0">
        <NavBar />
      </header>
      <main className="pt-16 px-4 md:px-16">
        <Hero />
        <Timelines />
        <Certificates />
        <SkillsSection />
        <Education />
        <Randoms />
        <EmailModal isOpen={isModalOpen} toggleModal={(argIsOpen) => setIsModalOpen(argIsOpen)} />
        <ScrollToTopButton />
      </main>
      <Footer toggleModal={(argIsOpen) => setIsModalOpen(argIsOpen)} />
    </>
  )
}

export default App
