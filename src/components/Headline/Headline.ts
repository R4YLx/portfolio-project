import { HeadlineProps } from './Headline.types'
import styles from './Headline.module.scss'

function Headline({ element, size }: HeadlineProps) {
  const headlineEl = document.createElement(element)
  headlineEl.className = styles[`Headline_size_${size}`]

  return headlineEl
}

export default Headline
