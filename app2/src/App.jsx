import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IngresarEstudiante from "./components/IngresarEstudiante"
import Card from './components/Card' 
import Formulario from './components/Formulario'
import Todo from './components/Todo'
import GradientBackground from './components/Gradient'
import ShadowEffects from './components/SombraAndFilter'
import TransitionsAnimations from './components/Transitions'
import ResponsiveDesign from './components/Responsive'
import Positioning from './components/Position'
import TableExample from './components/Tables'
import SpacingExample from './components/Espaciado'
import ZIndexExample from './components/Zindex'
import HoverFocusExample from './components/Pseudo'
import FlexGridExample from './components/Flexbox'
import MinimalGradient from './components/MinimalGradient'
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
      <br></br>
      <GradientBackground/>

      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <ShadowEffects/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <TransitionsAnimations/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <ResponsiveDesign/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <Positioning/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <TableExample/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <SpacingExample/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <ZIndexExample/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>      <HoverFocusExample/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br><FlexGridExample/>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br><MinimalGradient/>
      <br></br>






    </>
  )
}

export default App
