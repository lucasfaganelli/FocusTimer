import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
  clearTimeout(state.countdownId) // vai limpar countdown

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds-- // Ao clicar ele vai tirar 1s do timer

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play() // Colocando som de finalização
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000) // seTimeout função que vai receber um CallBack dps do tempo que eu quiser
  // Recurção (Quando uma função chama ela mesma) vai executar a cada segundo (Recurção tem que ser para em algum momento se não executa infinitamente)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // ?? vai ver se o minute é NULO e se ele for vai pegar o state.minutes e colocar no lugar
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
