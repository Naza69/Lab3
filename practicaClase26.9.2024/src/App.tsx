import { useState } from 'react'
import './App.css'
import PrimerComponente from './components/PrimerComponente'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Adivine el numero!</h1>
      <PrimerComponente/>
    </div>
  )
}

export default App
