import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { useFadeUp } from './hooks/useFadeUp'

function App() {
  useFadeUp()
  return (
    <div style={{ background: '#f7f4ef', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App