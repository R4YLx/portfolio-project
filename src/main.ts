import { dqs, dqsa } from './utils/helpers'
import Header from './components/Header'
import Home from './components/Sections/Home'
import './styles/global.scss'

const body: HTMLElement = document.body

//* Adding header to body
const header: HTMLElement = Header()
body.append(header)

//* Creating main element and adding to body
const mainEl = document.createElement('main')
body.append(mainEl)

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

//* Adding home section to main element
const homeSectionEl = Home()
mainEl.append(homeSectionEl)
