import Title from '../components/Title'
import Counter from '../components/counter'
import { Navigate } from 'react-router-dom'

import { useContext } from 'react'

import useCountdown from '../hooks/useCountdown'

import { CountdownContext } from '../context/CountdownContext'

const Countdown = () => {
  const {envent} = useContext(CountdownContext)
  console.log(envent);

  if(!envent) return <Navigate to="/"/>

  const enventTitle = envent.title

  const [day, hour, minute, second] = useCountdown('jan 1, 2025 00:00:00')

  return (
    <>
      <Title title={enventTitle}/>
      <div className="countdown-container">
        <Counter title="Dias" number={day}/>
        <Counter title="Horas" number={hour}/>
        <Counter title="Minutos" number={minute}/>
        <Counter title="Segundos" number={second}/>
      </div>
    </>
  )
}

export default Countdown