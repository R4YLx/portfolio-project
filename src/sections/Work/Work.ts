import styles from './Work.module.scss'

function Work() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'work'
  sectionEl.className = styles.Work

  const headline = document.createElement('h3')
  headline.innerText = 'Work'
  sectionEl.append(headline)

  return sectionEl
}

export default Work
