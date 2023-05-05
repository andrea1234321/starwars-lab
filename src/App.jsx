import { useState } from 'react'
import './App.css'
import Starships from './components/Starships/Starships'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Starships/>}/>
      </Routes>
    </>
  )
}

export default App
