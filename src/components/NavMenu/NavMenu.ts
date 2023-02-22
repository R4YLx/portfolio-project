import { scrollToView } from '../../utils/helpers'
import links from '../../data/links.json'
import styles from './NavMenu.module.scss'

function NavMenu() {
  const menuEl = document.createElement('ul')
  menuEl.className = styles.NavMenu
  menuEl.id = 'menu'

  //* Create list of links/sections
  links.forEach((item: { title: string }) => {
    const menuItemEl = document.createElement('li')
    menuItemEl.className = styles.NavMenu__item
    menuItemEl.setAttribute('data-menu', '')
    menuItemEl.innerText = item.title

    menuItemEl.addEventListener('click', () => {
      return scrollToView(item.title.toLowerCase())
    })

    menuEl.append(menuItemEl)
  })

  return menuEl
}

export default NavMenu
