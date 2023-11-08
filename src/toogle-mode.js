let darkMode = true
const buttonTogglee = document.getElementById('toggle-mode')

buttonTogglee.addEventListener('click', event => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode
    ? 'light'
    : 'dark' /* se tiver dark moder = aplicar light se não aplicar dark */
  event.currentTarget.querySelector(
    'span'
  ).textContent = `${mode} modo ativado` /* currentTarget = botão */

  darkMode =
    !darkMode /* ! é o contrario do atual = vai tirar darkMode do treu e deixar falso para trocar light/dark */
})
