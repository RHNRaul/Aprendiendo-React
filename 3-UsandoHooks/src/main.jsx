import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import contador from './components/contador.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <contador.contador></contador.contador>
  </StrictMode>,
)
