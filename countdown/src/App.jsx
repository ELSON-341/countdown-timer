import Title from './components/Title'
import Counter from './components/counter'

import NewYear from "./assets/newyear.jpg"

import useCountdown from './hooks/useCountdown'

import './App.css'

function App() {
  const X = useCountdown('jan 1, 2025 00:00:00')
  return (
      <div className="app" style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title=" Contagem regressiva para 2025"/>
          <div className="countdown-container">
            <Counter title="Dias" number={2}/>
            <Counter title="Horas" number={2}/>
            <Counter title="Minutos" number={2}/>
            <Counter title="Segundos" number={2}/>
          </div>
        </div>
      </div>
  )
}

export default App
