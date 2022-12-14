import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User'
import Story from './components/Storie'
import Hobbies from './components/Hobbies'
import FreeTime from './components/FreeTime'
import Food from './components/Food'
import Technologies from './components/Technologies'


function App() {
  const [count, setCount] = useState(0)

  const sayHi = () =>{
    alert ("Hello World")
  }
  
  const me = {
    nombre: "Laura Meza",
    pelicula: "Avengers End Game",
    musica: "Crosover"
  }

  return (
    <div className="App">
      <div className='card'>
        <h2 className='tittle'>Sobre mi</h2>
        <ul className='list'>
          <li className='nombre-lista'> Nombre: {me.nombre}</li>
          <li className='pelicula-lista'>Pelicula Favorita : {me.pelicula}</li>
          <li className='musica-lista'>Música Favorita : {me.musica}</li>
        </ul>
        <button onClick={sayHi}> Say Hi!</button>
        </div>
        <Hobbies />
        <FreeTime />
        <Food />
        <Technologies />
    </div>
  )
}

export default App
