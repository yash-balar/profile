import { useState } from 'react'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className='space-y-20 container'>
      <Hero/>
      <Skills />
      <Projects/>
    </div>
      <Footer/>
    </div>
    
  )
}

export default App
