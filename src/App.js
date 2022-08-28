import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Design from './components/design/Design'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Photo from './components/photo/Photo'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Projects />
      <Experience />
      <Design />
      <Photo />
      <Contact />
      <Footer />
    </>
  )
}

export default App