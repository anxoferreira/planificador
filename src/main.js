import { formatearFecha } from './utils.js'
import './style.css'
import confetti from 'canvas-confetti' 
import.meta.env.VITE_VERSION

const boton = document.getElementById('añadir')
const input = document.getElementById('texto')
const lista = document.getElementById('lista')

boton.addEventListener('click', guardarPlan)

function guardarPlan() {
  const pi = 3.14
  const fechaHoy = formatearFecha(new Date())
  const li = document.createElement('li')
  li.textContent = input.value + ' - ' + fechaHoy
  lista.appendChild(li)
  input.value = ''


  confetti({
    particleCount: 150,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  })
}