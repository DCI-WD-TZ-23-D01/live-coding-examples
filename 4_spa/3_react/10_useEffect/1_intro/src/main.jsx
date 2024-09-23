import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// um den strict mode von react zu deaktivieren, kommentieren wir die nutzung des "StrictMode" komponenten einfach aus.

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
