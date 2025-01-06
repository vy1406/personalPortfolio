import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import SkillsSection from './components/Skills'
import Timelines from './components/Timeline'
import NavBar from './components/NavBar'
import Education from './components/Education'
import Separator from './components/Separator'
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
      <main className='pt-16'>
        <Hero />
        <section>
          <Separator text={"Experience"} />
          <Timelines />
        </section>
        <section>
          <Separator text={"Certificates and Courses"} />
          <Certificates />
        </section>
        <section>
          <Separator text={"Skills"} />
          <SkillsSection />
        </section>
        <section>
          <Separator text={"Education"} />
          <Education />
        </section>
        <section>
          <Separator text={"Random"} />
          <Randoms />
        </section>
        <Footer toggleModal={(argIsOpen) => setIsModalOpen(argIsOpen)} />
        <EmailModal isOpen={isModalOpen} toggleModal={(argIsOpen) => setIsModalOpen(argIsOpen)} />
          <ScrollToTopButton />
      </main>
    </>
  )
}

export default App
