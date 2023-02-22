import { scrollToView } from '../../utils/helpers'
import renderHamburger from '../Hamburger'
import styles from './NavMenu.module.scss'

const links = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Work', href: '#work' },
  { title: 'Connect', href: '#connect' }
]

function renderNavMenu(parentEl: HTMLElement) {
  const menuEl = document.createElement('ul')
  menuEl.className = styles.NavMenu
  menuEl.id = 'menu'

  //* Create list of links/sections
  links.forEach((item: { title: string; href: string }) => {
    const menuItemEl = document.createElement('li')
    menuItemEl.className = styles.NavMenu__item
    menuItemEl.setAttribute('data-menu', '')
    menuItemEl.innerText = item.title

    menuItemEl.addEventListener('click', () => {
      return scrollToView(item.title.toLowerCase())
    })

    menuEl.append(menuItemEl)
    parentEl.append(menuEl)
  })

  //* Renders hamburger menu
  renderHamburger(parentEl)
}

export default renderNavMenu