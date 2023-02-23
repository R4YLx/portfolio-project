import styles from './Parallax.module.scss'

function Parallax() {
  const parallaxWrapperEl = document.createElement('div')
  parallaxWrapperEl.id = 'parallax'
  // parallaxWrapperEl.className = styles.Parallax

  //* Creating five divs for parallax layers
  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div')
    div.className = styles.Parallax__item
    div.setAttribute('data-parallax', `layer${i + 1}`)
    div.id = `parallaxLayer${i + 1}`

    parallaxWrapperEl.append(div)
  }

  //! Logic for the parallax is in main.ts

  return parallaxWrapperEl
}

export default Parallax
