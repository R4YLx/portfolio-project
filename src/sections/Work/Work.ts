import Card from '../../components/Card'
import _projects from '../../data/projects.json'
import styles from './Work.module.scss'

const projects: IProject[] = _projects

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

  const contentWrapperEl = document.createElement('div')
  contentWrapperEl.className = styles.Work__contentWrapper
  wrapperEl.append(contentWrapperEl)

  projects.forEach((project: IProject) => {
    contentWrapperEl.append(Card(project))
  })

  return sectionEl
}

export default Work
