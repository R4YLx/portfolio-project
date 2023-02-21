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
  links.map((item: { title: string; href: string }) => {
    const menuItemEl = document.createElement('li')
    menuItemEl.className = styles.NavMenu__item
    menuItemEl.setAttribute('data-menu', '')

    const linkEl = document.createElement('a')
    linkEl.className = styles.NavMenu__link

    menuItemEl.append(linkEl)

    linkEl.innerText = item.title
    linkEl.href = item.href

    menuEl.append(menuItemEl)
    parentEl.append(menuEl)
  })

  //* Renders hamburger menu
  renderHamburger(parentEl)
}

export default renderNavMenu
