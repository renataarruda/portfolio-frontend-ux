import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Tecnologies from './components/Tecnologies/Tecnologies'

function App() {

  return (
   <div>
    <Header />
    <About />
    <Tecnologies />
    <Projects />
    <Contact />
   </div>
  )
}

export default App
