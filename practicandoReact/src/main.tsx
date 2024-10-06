import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MiPrimerComponente } from './components/MiPrimerComponente/MiPrimerComponente'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiPrimerComponente text={"Texto desde react"} color="red" />
    <MiPrimerComponente text={"Texto desde react 2"} color='blue'/>
    <MiPrimerComponente text={"Texto desde react 3"} color='green'/>
  </StrictMode>,
)
