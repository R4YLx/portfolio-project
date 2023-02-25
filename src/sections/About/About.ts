import image from '../../assets/image/profile-img.jpg'
import styles from './About.module.scss'

function About() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'about'
  sectionEl.className = styles.About

  const wrapperEl = document.createElement('article')
  wrapperEl.className = styles.About__wrapper
  sectionEl.append(wrapperEl)

  const headlineEl = document.createElement('h3')
  headlineEl.className = styles.About__headline
  headlineEl.innerText = 'About'
  wrapperEl.append(headlineEl)

  const contentWrapperEl = document.createElement('div')
  contentWrapperEl.className = styles.About__contentWrapper
  wrapperEl.append(contentWrapperEl)

  const imgContainerEl = document.createElement('div')
  imgContainerEl.className = styles.About__imgContainer
  contentWrapperEl.append(imgContainerEl)

  const imgEl = document.createElement('img')
  imgEl.className = styles.About__img
  imgEl.src = image
  imgContainerEl.append(imgEl)

  const textWrapper = document.createElement('div')
  textWrapper.className = styles.About__textWrapper
  contentWrapperEl.append(textWrapper)

  const paraOne = document.createElement('p')
  paraOne.className = styles.About__greeting
  paraOne.innerText = 'Hello there friends and strangers!'
  textWrapper.append(paraOne)

  const paraTwo = document.createElement('p')
  paraTwo.className = styles.About__paragraph
  paraTwo.innerText =
    "As a frontend developer, I get to work with some of the coolest technologies out there! It's like being a kid in a candy store, except instead of candy, I get to play with code. And let me tell you, it's just as sweet."
  textWrapper.append(paraTwo)

  const paraThree = document.createElement('p')
  paraThree.className = styles.About__paragraph
  paraThree.innerText =
    'One of the things I love most about working with frontend technologies is the ability to create beautiful and functional user interfaces.'
  textWrapper.append(paraThree)

  const paraFour = document.createElement('p')
  paraFour.className = styles.About__paragraph
  paraFour.innerText =
    'Prior to pursuing this career, I gained several years of experience working in sales and customer service. However, I was drawn to the challenge and potential for innovation in the tech industry.'
  textWrapper.append(paraFour)

  const paraFive = document.createElement('p')
  paraFive.className = styles.About__paragraph
  paraFive.innerText =
    "Frontend development is an exciting adventure filled with creativity, innovation, and endless possibilities. I feel lucky to work in a field where I get to constantly learn and grow, and I can't wait to see what the future holds."
  textWrapper.append(paraFive)

  return sectionEl
}

export default About
