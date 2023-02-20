import style from './Counter.module.scss'

function Counter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    element.className = style.Button
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export default Counter
