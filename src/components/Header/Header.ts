import Hamburger from '../Hamburger'
import NavMenu from '../NavMenu'
import styles from './Header.module.scss'

function Header(): HTMLElement {
  //* Creating header element
  const headerEl = document.createElement('header')
  headerEl.id = 'header'
  headerEl.className = styles.Header

  //* Creating logo
  const logoImg = document.createElement('img')
  logoImg.className = styles.Header__logo
  logoImg.src = '/logo/logo.svg'
  logoImg.alt = 'logo'

  //* Adding logo to header
  headerEl.append(logoImg)

  const navEl = NavMenu()
  headerEl.append(navEl)

  const hamburgeEl = Hamburger()
  headerEl.append(hamburgeEl)

  return headerEl
}

export default Header
