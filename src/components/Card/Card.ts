import styles from './Card.module.scss'

function Card(project: IProject) {
  console.log('project', project)
  const containerEl = document.createElement('div')
  containerEl.className = styles.Card

  const imageEl = document.createElement('img')
  imageEl.className = styles.Card__image
  imageEl.src = project.project_img
  imageEl.alt = project.project_title
  containerEl.append(imageEl)

  const headlineEl = document.createElement('h4')
  headlineEl.className = styles.Card__headline
  headlineEl.innerText = project.project_title
  containerEl.append(headlineEl)

  const buttonWrapperEl = document.createElement('div')
  buttonWrapperEl.className = styles.Card__buttonWrapper
  containerEl.append(buttonWrapperEl)

  const codeAnchorEl = document.createElement('a')
  codeAnchorEl.className = styles[`Card__button_outline`]
  codeAnchorEl.innerText = 'Source Code'
  codeAnchorEl.target = '_blank'
  codeAnchorEl.href = project.project_link
  buttonWrapperEl.append(codeAnchorEl)

  const deployAnchor = document.createElement('a')
  deployAnchor.className = styles[`Card__button_fill`]
  deployAnchor.innerText = 'Deployed Site'
  deployAnchor.target = '_blank'
  deployAnchor.href = project.project_deploy
  buttonWrapperEl.append(deployAnchor)

  return containerEl
}

export default Card
