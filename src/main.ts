import './styles/global.scss'
import Counter from './components/Counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello world</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

Counter(document.querySelector<HTMLButtonElement>('#counter')!)
