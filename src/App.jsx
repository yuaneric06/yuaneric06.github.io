import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import './App.css'

export default function App() {
  return (
    <div className="full-screen-gradient">
      <div className="grid-overlay"></div>
      <Header />
      <Hero />
      <br />
      <Projects />
    </div>
  )
}