import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log('clicked', Math.random())
    if (counter < 20)  setCounter(counter + 1)

  }
  const removeValue = () => {
    console.log('clicked', Math.random())
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={addValue}>Increase value {counter}</button>
        <br />
        <button onClick={removeValue}>Decrese Value {counter}</button>
      </div>
    </>
  )
}
 
export default App
