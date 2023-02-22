import Headline from '../../components/Headline'
import styles from './Work.module.scss'

function Work() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'work'
  sectionEl.className = styles.Work

  const headline = Headline({ element: 'h3', size: 'md' })
  headline.innerText = 'Work'
  sectionEl.append(headline)

  return sectionEl
}

export default Work
