import styles from './Hamburger.module.scss'

function Hamburger() {
  const hamburgerBtn = document.createElement('button')
  hamburgerBtn.id = 'hamburgerBtn'
  hamburgerBtn.className = styles.HamburgerBtn

  const hamburgerBars = document.createElement('div')
  hamburgerBars.className = styles.HamburgerBtn__bars
  hamburgerBars.id = 'hamburgerBars'

  hamburgerBtn.append(hamburgerBars)

  return hamburgerBtn
}

export default Hamburger
