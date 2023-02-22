import { TextProps } from './Text.types'
import styles from './Text.module.scss'

function Text({ element, size }: TextProps) {
  const textEl = document.createElement(element)
  textEl.className = styles[`Text_size_${size}`]

  return textEl
}

export default Text
