export function dqs(el: string) {
  return document.querySelector(el)
}

export function dqsa(el: string) {
  return document.querySelectorAll(el)
}

export function scrollToView(el: string) {
  const element = dqs(`#${el}`) as HTMLElement

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start'
  })
}
