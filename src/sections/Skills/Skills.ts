import styles from './Skills.module.scss'

function Skills() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'skills'
  sectionEl.className = styles.Skills

  const waveEl = document.createElement('div')
  waveEl.className = styles.Skills__wave
  sectionEl.append(waveEl)

  const wrapperEl = document.createElement('article')
  wrapperEl.className = styles.Skills__wrapper
  sectionEl.append(wrapperEl)

  const headline = document.createElement('h3')
  headline.className = styles.Skills__headline
  headline.innerText = 'Skills'
  wrapperEl.append(headline)

  return sectionEl
}

export default Skills
