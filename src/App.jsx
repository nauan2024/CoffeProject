import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './components/Home'
import { Best_Coffe } from './components/Best-Coffe'
import './App.css'
import { Coffe_style } from './components/Coffee-style'
function App() {

  return (
    <>
      <Home />
      <Best_Coffe />
      <Coffe_style/>
    </>
  )
}

export default App
