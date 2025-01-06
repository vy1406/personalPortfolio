import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import './App.css'
import SkillsSection from './components/Skills'
import Timelines from './components/Timeline'
import NavBar from './components/NavBar'
import Education from './components/Education'

function App() {

  return (
    <div class="flex flex-col min-h-screen">
  <header class="sticky z-50 bg-gray-300 top-0 p-4">
    header contents
  </header>
  <div class="flex-grow">
    <main>
        <div style={{height: '100vh'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?
        </div>
    </main>
  </div>
  <footer class="sticky z-50 bg-gray-300 bottom-0 p-4">
    footer contents
  </footer>
</div>
    // <>

    //   {/* <NavBar /> */}

    //   <header className="sticky top-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200" >
    //     <div >
    //       <div className="max-w-5xl mx-auto px-4">
    //         <div className="flex items-center justify-between h-16">
    //           <span className="text-2xl text-gray-900 font-semibold">Logo</span>
    //           <div className="flex space-x-4 text-gray-900">
    //             <a href="#">Dashboard</a>
    //             <a href="#">About</a>
    //             <a href="#">Projects</a>
    //             <a href="#">Contact</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <main className='pt-16'>

    //     <Hero />
    //     <Timelines />
    //     <SkillsSection />
    //     <Education />
    //   </main>
    // </>
  )
}

export default App
