import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clock from './Clock.jsx'

const root = createRoot(document.getElementById('root'))

  root.render(
    <StrictMode>
      <App />
      <Clock country='ITALY' timeshow="0"/> 
      <Clock country='RUSSIA' timeshow="3" />
      <Clock country='CUBA' timeshow="-6" />
    </StrictMode>,
  )

//le proprietà di quella componente devono essere scritte come attributi e poi passate come props




