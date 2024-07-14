import { useState } from 'react'
import BarBuscador from './components/Templates/BarBuscador/BarBuscador'
import './App.css'
import Carrusel from './components/organisms/Carrusel/Carrusel'
import PiePagina from './components/Templates/PiePagina/PiePagina'
import Modulos from './components/Molecules/Modulos/Modulos'
import Algebra from './assets/cursos/algebra-lineal-banner.jpg'

function App() {

  return (
    <>
      <BarBuscador/>
      <Carrusel/>
      <Modulos imageSrc={Algebra}/>
      <Modulos/>

      <PiePagina/>
    </>
  )
}

export default App
