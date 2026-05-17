import React from 'react'
import Header from './components/Header'
import Background from './components/Background'
import Profile from './pages/Profile'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <Background />
      <Header />
      <main className='max-w-6xl mx-auto px-6'>
        <Profile />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App