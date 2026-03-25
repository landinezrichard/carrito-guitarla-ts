import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

// ! --> es necesario el ! para indicarle a TS que el elemento no es null, ya que getElementById puede retornar null
// ! --> es un non-null assertion operator, que le dice a TS que confíe en nosotros y que el valor no será null o undefined en tiempo de ejecución. Es útil cuando sabemos que el elemento existe en el DOM pero TS no puede inferirlo.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
