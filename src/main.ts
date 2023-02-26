import { dqs, dqsa } from './utils/helpers'
import Header from './components/Header'
import Start from './sections/Start'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import './styles/global.scss'

const body: HTMLElement = document.body
body.append(Header())

//* Creating main element and adding to body
const mainEl = document.createElement('main')
mainEl.id = 'main'
body.append(mainEl)

//* Adding sections to main element
mainEl.append(Start())
mainEl.append(About())
mainEl.append(Skills())
mainEl.append(Work())

//* Querying for menu elements
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

//* Closes hamburger menu when you click outside of menu element
document.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement

  if (
    target.id !== 'hamburgerBtn' &&
    target.id !== 'hamburgerBars' &&
    target.id !== 'menu' &&
    target.dataset.menu !== ''
  ) {
    hamburgerBtnEl.removeAttribute('active')
    hamburgerBtnEl.removeAttribute('open')
    menuEl.removeAttribute('active')
  }
})

//* Scroll event for parallax effect
const parallaxLayer1El = dqs('#parallaxLayer1') as HTMLDivElement
const parallaxLayer2El = dqs('#parallaxLayer2') as HTMLDivElement
const parallaxLayer3El = dqs('#parallaxLayer3') as HTMLDivElement
const parallaxLayer4El = dqs('#parallaxLayer4') as HTMLDivElement
const parallaxLayer5El = dqs('#parallaxLayer5') as HTMLDivElement

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  //* Layers are listed from back(Layer1) to front(Layer5)
  parallaxLayer1El.style.backgroundPositionY = currentScroll * 0.5 + 'px'
  parallaxLayer2El.style.backgroundPositionY = currentScroll * 0.4 + 'px'
  parallaxLayer3El.style.backgroundPositionY = currentScroll * 0.3 + 'px'
  parallaxLayer4El.style.backgroundPositionY = currentScroll * 0.2 + 'px'
  parallaxLayer5El.style.backgroundPositionY = currentScroll * 0.1 + 'px'
})
