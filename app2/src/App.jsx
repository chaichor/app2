import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IngresarEstudiante from "./components/IngresarEstudiante"
import Card from './components/Card' 
import Formulario from './components/Formulario'
import Todo from './components/Todo'
import './App.css'

function App() {
  return (
    <>
     
      <Card 
        nombre="Christian Alessandro Marin Sandoval"
        edad="18 años"
        informacion="Desarrollador frontend con experiencia en React y Tailwind CSS."
      />
      <br></br>
 <h1>Calculadora</h1>
      <br></br>
      <Formulario/>
      <Todo/>
      <br></br>
      <IngresarEstudiante/>

    </>
  )
}

export default App
