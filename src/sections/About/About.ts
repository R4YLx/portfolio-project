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
  // textWrapper.className = styles.About__textWrapper
  contentWrapperEl.append(textWrapper)

  const paraOne = document.createElement('p')
  paraOne.className = styles.About__paragraph
  paraOne.innerText =
    'I am a Front End Developer with a passion for creating functional and aesthetically pleasing websites using TypeScript and SCSS. Prior to pursuing this career, I gained several years of experience working in sales and customer service. However, I was drawn to the challenge and potential for innovation in the tech industry.'
  textWrapper.append(paraOne)

  const paraTwo = document.createElement('p')
  paraTwo.className = styles.About__paragraph
  paraTwo.innerText = ''

  return sectionEl
}

export default About
