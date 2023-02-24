import _skills from '../../data/skills.json'
import styles from './Skills.module.scss'

const skills: ISkill[] = _skills

function Skills() {
  const sectionEl = document.createElement('section')
  sectionEl.id = 'skills'
  sectionEl.className = styles.Skills

  const waveEl = document.createElement('div')
  waveEl.className = styles.Skills__wave
  sectionEl.append(waveEl)

  const wrapperEl = document.createElement('article')
  wrapperEl.className = styles.Skills__wrapper
  sectionEl.append(wrapperEl)

  const headline = document.createElement('h3')
  headline.className = styles.Skills__headline
  headline.innerText = 'Skills'
  wrapperEl.append(headline)

  const contentWrapperEl = document.createElement('div')
  contentWrapperEl.className = styles.Skills__contentWrapper
  wrapperEl.append(contentWrapperEl)

  const subHeadlineEl = document.createElement('h4')
  subHeadlineEl.className = styles.Skills__subHeadline
  subHeadlineEl.innerText =
    "Here's some of the candy I mentioned earlier. These are some of the many amazing technologies and tools I'm working with!"
  contentWrapperEl.append(subHeadlineEl)

  const badgeWrapperEl = document.createElement('div')
  badgeWrapperEl.className = styles.Skills__badgeWrapper
  contentWrapperEl.append(badgeWrapperEl)

  skills.forEach((skill: ISkill) => {
    const badgeEl = document.createElement('div')
    badgeEl.className = `${styles.Skills__badge} ${
      styles[`Skills__badge_${skill.skill_id}`]
    }`

    const roundedEl = document.createElement('div')
    roundedEl.className = styles.Skills__rounded

    const iconEl = document.createElement('i')
    iconEl.className = `${skill.skill_icon} ${styles.Skills__icon}`
    roundedEl.append(iconEl)

    badgeEl.append(roundedEl)

    badgeWrapperEl.append(badgeEl)
  })

  return sectionEl
}

export default Skills
