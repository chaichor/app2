import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card' // Importa el componente
import Formulario from './components/Formulario'
import './App.css'

function App() {
  return (
    <>
      
      <Card 
        nombre="Christian Alessandro Marin Sandoval"
        edad="18 años"
        informacion="Desarrollador frontend con experiencia en React y Tailwind CSS."
      />

      <Formulario/>

    </>
  )
}

export default App
