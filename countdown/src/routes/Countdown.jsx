import Title from '../components/Title'
import Counter from '../components/counter'
import { Navigate } from 'react-router-dom'

import { useContext } from 'react'

import useCountdown from '../hooks/useCountdown'

import { CountdownContext } from '../context/CountdownContext'

const Countdown = () => {
  const {event} = useContext(CountdownContext)
  console.log(event);

  if(!event) return <Navigate to="/" replace/>
  let eventTitle = null;

  if (event.title) eventTitle = event.title;


  const [day, hour, minute, second] = useCountdown('jan 1, 2025 00:00:00')

  return (
    <>
      <Title title={eventTitle}/>
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