import Headline from '../../Headline'
import styles from './Skills.module.scss'

function Skills() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'skills'
  sectionEl.className = styles.Skills

  const headline = Headline({ element: 'h4', size: 'sm' })
  headline.innerText = 'Skills'
  sectionEl.append(headline)

  return sectionEl
}

export default Skills
