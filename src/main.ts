import renderNavMenu from './components/NavMenu'
import './styles/global.scss'
import { dqs, dqsa } from './utils/helpers'

const body = document.body

const navigationEl = dqs('.navigation') as HTMLElement
renderNavMenu(navigationEl)

const hamburgerBtnEl = dqs('#hamburgerBtn') as HTMLButtonElement
const menuEl = dqs('#menu') as HTMLUListElement
const menuItemsEl = dqsa('[data-menu]') as NodeListOf<HTMLLIElement>

//* Hides and show hamburger menu
function hamburgerShow() {
  hamburgerBtnEl.toggleAttribute('active')
  menuEl.toggleAttribute('active')
}

//* Click event for hamburger button
hamburgerBtnEl.addEventListener('click', () => {
  hamburgerBtnEl.toggleAttribute('open')

  hamburgerShow()

  //* Closes hamburger menu on click on list item
  menuItemsEl.forEach((menuItem) => {
    menuItem.addEventListener('click', hamburgerShow)
  })
})
