import { useState, useContext } from 'react'

import { CountdownContext } from '../context/CountdownContext'

import { useNavigate } from 'react-router-dom'

import './Home.css'

const Home = () => {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [image, setImage] = useState()
  const [color, setColor] = useState()

  const {event, setEvent} = useContext(CountdownContext)
  console.log(event);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const eventObject = {
      title,
      date,
      image,
      color
    }

    console.log(eventObject);
    setEvent(eventObject)
    navigate('/contdown')
  }
  
  return <div className='home'>
    <h2>Monte a sua contagem regressiva!</h2>
    <form className="countdown-form" onSubmit={handleSubmit}>
      <label>
        <span>Título:</span>
        <input type="text" name="title" placeholder="Digite seu título do evento" onChange={(e) => setTitle(e.target.value)} required/>
      </label>
      <label>
        <span>Data do evento:</span>
        <input type="date" name="date" onChange={(e) => setDate(e.target.value)} required/>
      </label>
      <label>
        <span>Imagem:</span>
        <input type="text" name="image" placeholder="Insira a URL da imgem" onChange={(e) => setImage(e.target.value)}/>
      </label>
      <label>
        <span>Cor do tema:</span>
        <input type="color" name="color" onChange={(e) => setColor(e.target.value)} required/>
      </label>
      <input type="submit" value="Eveviar"/>
    </form>
  </div>
}

export default Home