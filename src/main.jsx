import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Browser scroll restore letiltása – React Router manuálisan kezeli
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
