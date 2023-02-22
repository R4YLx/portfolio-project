import Headline from '../../Headline'
import styles from './About.module.scss'

function About() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'about'
  sectionEl.className = styles.About

  const headline = Headline({ element: 'h4', size: 'sm' })
  headline.innerText = 'About'
  sectionEl.append(headline)

  return sectionEl
}

export default About
