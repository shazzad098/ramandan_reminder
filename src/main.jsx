import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Google Fonts dynamically load korar jonno
const link = document.createElement('link')
link.href = 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap'
link.rel = 'stylesheet'
document.head.appendChild(link)

// Global style for font family
const style = document.createElement('style')
style.textContent = `
  body {
    font-family: 'Hind Siliguri', sans-serif;
  }
`
document.head.appendChild(style)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)