import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <h1 className='title'>🎞Películas</h1>
    </header>
  )
}

export default App
