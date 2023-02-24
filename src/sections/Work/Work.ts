import styles from './Work.module.scss'

function Work() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'work'
  sectionEl.className = styles.Work

  const waveEl = document.createElement('div')
  waveEl.className = styles.Work__wave
  sectionEl.append(waveEl)

  const wrapperEl = document.createElement('article')
  wrapperEl.className = styles.Work__wrapper
  sectionEl.append(wrapperEl)

  const headline = document.createElement('h3')
  headline.className = styles.Work__headline
  headline.innerText = 'Work'
  wrapperEl.append(headline)

  return sectionEl
}

export default Work
