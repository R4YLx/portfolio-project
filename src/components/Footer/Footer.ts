import GitHubIcon from '../../assets/icons/github-icon.svg'
import LinkedInIcon from '../../assets/icons/linkedin-icon.svg'
import styles from './Footer.module.scss'

function Footer() {
  const footerEl = document.createElement('footer')
  footerEl.id = 'footer'
  footerEl.className = styles.Footer

  const waveEl = document.createElement('div')
  waveEl.className = styles.Footer__wave
  footerEl.append(waveEl)

  const containerEl = document.createElement('div')
  containerEl.className = styles.Footer__container
  footerEl.append(containerEl)

  const gAnchorTag = document.createElement('a')
  gAnchorTag.target = '_blank'
  gAnchorTag.href = 'https://github.com/R4YLx/'
  containerEl.append(gAnchorTag)

  const lAnchorTag = document.createElement('a')
  lAnchorTag.target = '_blank'
  lAnchorTag.href = 'https://www.linkedin.com/in/raymondlam-dev/'
  containerEl.append(lAnchorTag)

  const gIconEl = document.createElement('img')
  gIconEl.src = GitHubIcon
  gIconEl.alt = 'GitHub Icon'
  gIconEl.className = styles.Footer__icon
  gAnchorTag.append(gIconEl)

  const lIconEl = document.createElement('img')
  lIconEl.src = LinkedInIcon
  lIconEl.alt = 'LinkedIn Icon'
  lIconEl.className = styles.Footer__icon
  lAnchorTag.append(lIconEl)

  return footerEl
}

export default Footer
