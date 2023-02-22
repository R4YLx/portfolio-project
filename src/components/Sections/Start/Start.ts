import styles from './Start.module.scss'

function Start() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'start'
  sectionEl.className = styles.Start

  //* Creating parallax
  const parallaxWrapperEl = document.createElement('div')
  parallaxWrapperEl.className = styles.Start__parallaxWrapper

  //* TODO: Loop thru parallax layers

  sectionEl.append(parallaxWrapperEl)

  //* Creating greeting headline
  const headlineContainerEl = document.createElement('div')
  headlineContainerEl.className = styles.Start__textWrapper
  const headlineEl = document.createElement('h1')
  const spanOneEl = document.createElement('span')
  const spanTwoEl = document.createElement('span')
  const headlinePhrase = document.createElement('h2')

  //* Creating headline spans
  spanOneEl.innerText = 'Chào,'
  spanOneEl.className = styles.Start__greeting
  spanTwoEl.innerText = 'my name is Raymond Lam.'
  spanOneEl.className = styles.Start__intro
  headlinePhrase.innerText = 'I’m a Front End Developer.'
  headlinePhrase.className = styles.Start__phrase

  //* Adding spans to h1
  headlineEl.append(spanOneEl)
  headlineEl.append(spanTwoEl)

  //* Adding h1 and h2 to div container
  headlineContainerEl.append(headlineEl)
  headlineContainerEl.append(headlinePhrase)

  //* Adding headline container to section element
  sectionEl.append(headlineContainerEl)

  return sectionEl
}

export default Start
