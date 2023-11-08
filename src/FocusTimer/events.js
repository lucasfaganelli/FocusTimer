import state from './state.js'
import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'

/* criando fução para observar os clicks e verificando quais deles tem ações que precisa */
export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      /* se o tipo não for uma função = parar */
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  // Focar e sumir com minutos quando selecionar o tempo
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  el.minutes.onkeypress = event => /\d/.test(event.key) // O /\d/ (se não for numero ele vai retornar falso) / se for numero vai retornar true

  el.minutes.addEventListener('blur', event => {
    let time = event.currentTarget.textContent // Vai limitar o tempo para não passar de 60 minutos
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}
