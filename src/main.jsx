import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';             // importa vars y reset
import './styles/variables.css';  // opcional si aún no lo hicieras
import './components/Hero.css';   // por último, Hero
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Scroll manual BLOQUEADO para forzar navegación con Navbar
window.addEventListener('wheel', e => e.preventDefault(), { passive: false });
window.addEventListener('keydown', e => {
  if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End'].includes(e.key)) {
    e.preventDefault();
  }
});
