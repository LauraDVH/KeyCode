import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from '../components/Tarjeta.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tarjeta apellido="Mariana" nombre="Beltran" edad={13} genero />
    <Tarjeta nombre="Laura" apellido="Vargas" edad={21} />    
    <Tarjeta />

    <App />
  </StrictMode>
)
