import renderNavMenu from './components/NavMenu'
import { dqs, dqsa } from './utils/helpers'
import './styles/global.scss'

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
  hamburgerBtnEl.toggleAttribute('open')
}

//* Click event for hamburger button
hamburgerBtnEl.addEventListener('click', () => {
  hamburgerShow()

  //* Closes hamburger menu on click on list item
  menuItemsEl.forEach((menuItem) => {
    menuItem.addEventListener('click', hamburgerShow)
  })
})
