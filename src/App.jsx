import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Welcome from './components/Welcome/Welcome'
import TvIntro from './components/Projects/tvIntro/TvIntro'
import './App.css'

function App() {
  return (
    <>
      <Welcome />
      <Intro />
      <TvIntro />
      <Projects />
    </>
  )
}

export default App
