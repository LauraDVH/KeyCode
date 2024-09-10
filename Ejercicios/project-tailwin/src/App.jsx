import { useState } from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/welcome'
import Services from './components/Services'  

import './App.css'

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Seccion Bienvenida component */}
      <Welcome />
      {/* Services component */}
      <Services/>
    </>
  )
}

export default App
