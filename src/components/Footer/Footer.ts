import styles from './Footer.module.scss'

function Footer() {
  const footerEl = document.createElement('footer')
  footerEl.id = 'footer'
  footerEl.className = styles.Footer

  const temp = document.createElement('h3')
  temp.innerText = 'Footer'

  footerEl.append(temp)

  return footerEl
}

export default Footer
