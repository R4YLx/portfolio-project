import styles from './Skills.module.scss'

function Skills() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'skills'
  sectionEl.className = styles.Skills

  const headline = document.createElement('h3')
  headline.innerText = 'Skills'
  sectionEl.append(headline)

  return sectionEl
}

export default Skills
