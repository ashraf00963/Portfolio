import { useState } from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
    <>
      <Welcome />
      <Intro />
      <Projects />
    </>
  )
}

export default App
