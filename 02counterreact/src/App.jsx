import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  const addInc = () => {
    console.log("CLicked ", counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1>CodeSpire</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addInc}>Inc</button>
      <br />
      <button onClick={removeValue}>Dnc</button>
    </>
  )
}

export default App
