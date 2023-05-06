import { useState } from 'react'
import './App.css'
import Starships from './components/Starships/Starships'
import StarshipDetails from './components/StarshipPage/StarshipPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Starships/>}/>
        <Route path='/starships/:starshipId' element={<StarshipDetails/>}/>
      </Routes>
    </>
  )
}

export default App
