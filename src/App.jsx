import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { useFadeUp } from './hooks/useFadeUp'

function App() {
  useFadeUp()

  return (
    <>
      <Background />

      <main className="app">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

export default App