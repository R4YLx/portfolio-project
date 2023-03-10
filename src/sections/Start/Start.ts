import Parallax from '../../components/Parallax'
import styles from './Start.module.scss'

function Start() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'start'
  sectionEl.className = styles.Start

  //* Creating parallax
  sectionEl.append(Parallax())

  //* Creating greeting headline
  const headlineContainerEl = document.createElement('div')
  headlineContainerEl.className = styles.Start__textWrapper
  const headlineEl = document.createElement('h1')
  const headlineGreet = document.createElement('span')
  const headlineName = document.createElement('span')
  const headlinePhrase = document.createElement('h2')

  //* Creating headline spans
  headlineGreet.innerText = 'Chào,'
  headlineGreet.className = styles.Start__greeting
  headlineName.innerText = 'my name is Raymond Lam.'
  headlineName.className = styles.Start__intro
  headlinePhrase.innerText = 'I’m a Front End Developer.'
  headlinePhrase.className = styles.Start__phrase

  //* Adding spans to h1
  headlineEl.append(headlineGreet)
  headlineEl.append(headlineName)

  //* Adding h1 and h2 to div container
  headlineContainerEl.append(headlineEl)
  headlineContainerEl.append(headlinePhrase)

  //* Adding headline container to section element
  sectionEl.append(headlineContainerEl)

  return sectionEl
}

export default Start
