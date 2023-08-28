import { useState } from 'react';
import './App.css'
import BtnFortune from './components/BtnFortune';
import Fortune from './components/Fortune';
import phrases from  './utils/phrases.json'
import getRandomElementArray from './utils/getRandomElementArray';


function App() {

  const phraseRandom =  getRandomElementArray(phrases)
  const numberRandom = getRandomElementArray([1, 2, 3, 4])

  const [fortune, setFortune] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage:`url(/fondo${numberBg}.png)`
  }

  return (
    <>
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la Fortuna</h1>
      <Fortune phrase={fortune} />
      <BtnFortune 
      setFortune={setFortune} 
      phrases={phrases}
      setNumberBg={setNumberBg}
      />

    </div>
    </>
  )
}

export default App
