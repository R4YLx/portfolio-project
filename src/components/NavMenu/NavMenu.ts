import { scrollToView } from '../../utils/helpers'
import _links from '../../data/links.json'
import _socials from '../../data/socials.json'
import styles from './NavMenu.module.scss'

const links: ILink[] = _links
const socials: ISocial[] = _socials

function NavMenu() {
  const containerEl = document.createElement('div')
  containerEl.className = styles.NavMenu
  containerEl.id = 'menu'

  const menuEl = document.createElement('ul')
  menuEl.className = styles.NavMenu__linksWrapper

  const socialsWrapperEl = document.createElement('ul')
  socialsWrapperEl.className = styles.NavMenu__socialsWrapper

  //* Create list of links/sections
  links.forEach((item: ILink) => {
    const menuItemEl = document.createElement('li')
    menuItemEl.className = styles.NavMenu__links
    menuItemEl.setAttribute('data-menu', '')
    menuItemEl.innerText = item.title

    menuItemEl.addEventListener('click', () => {
      return scrollToView(item.title.toLowerCase())
    })

    menuEl.append(menuItemEl)
  })

  socials.forEach((social: ISocial) => {
    const socialItem = document.createElement('li')
    const anchorEl = document.createElement('a')
    anchorEl.target = '_blank'
    anchorEl.href = social.social_url
    socialItem.append(anchorEl)

    const iconEl = document.createElement('i')
    iconEl.className = `${social.social_icon} ${styles.NavMenu__icon}`
    anchorEl.append(iconEl)

    socialsWrapperEl.append(socialItem)
  })

  containerEl.append(menuEl)
  containerEl.append(socialsWrapperEl)

  return containerEl
}

export default NavMenu
