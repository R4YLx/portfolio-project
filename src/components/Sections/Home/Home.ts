import styles from './Home.module.scss'

function Home() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'home'

  //* Creating parallax
  const parallaxWrapperEl = document.createElement('div')
  parallaxWrapperEl.className = styles.Home__parallaxWrapper

  //* TODO: Loop thru parallax layers

  sectionEl.append(parallaxWrapperEl)

  //* Creating greeting headline
  const headlineContainerEl = document.createElement('div')
  const headlineEl = document.createElement('h1')
  const spanOneEl = document.createElement('span')
  const spanTwoEl = document.createElement('span')

  //* Creating headline spans
  spanOneEl.innerText = 'Chào,'
  spanOneEl.className = styles.Home__greeting
  spanTwoEl.innerText = 'my name is Raymond Lam.'
  spanOneEl.className = styles.Home__phrase

  //* Adding spans to h1
  headlineEl.append(spanOneEl)
  headlineEl.append(spanTwoEl)

  //* Adding h1 to div container
  headlineContainerEl.append(headlineEl)

  //* Adding headline container to section element
  sectionEl.append(headlineContainerEl)

  return sectionEl
}

export default Home
