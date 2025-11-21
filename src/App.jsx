import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
