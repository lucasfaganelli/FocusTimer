import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running') //Fazendo click rodar código e mudar icones

  timer.countdown()
  sounds.buttonPressAudio.play() // Colocando som
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running') // Quando estiver rodando vai parar ele e vai voltar icones padrão
  timer.updateDisplay() // V ai fazer o timer parar de rodar e ira retornar ao tempo aplicado nele

  sounds.buttonPressAudio.play() // Colocando som
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on') //Quando clicar vai mudar para Com/Sem musica e ira alterar icone

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}
