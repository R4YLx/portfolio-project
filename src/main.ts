import { dqs, dqsa } from './utils/helpers'
import Header from './components/Header'
import Start from './components/Sections/Start'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Work from './components/Sections/Work'
import Footer from './components/Footer'
import './styles/global.scss'

const body: HTMLElement = document.body
body.append(Header())

//* Creating main element and adding to body
const mainEl = document.createElement('main')
mainEl.id = 'main'
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
mainEl.append(Start())
mainEl.append(About())
mainEl.append(Skills())
mainEl.append(Work())
body.append(Footer())
