import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import WIP from './components/WIP.jsx'
import './App.css'

export default function App() {
  return (
    <div className="full-screen-gradient">
      <div className="grid-overlay"></div>
      <WIP />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}