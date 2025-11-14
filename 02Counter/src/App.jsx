import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter += 1;
    setCounter(counter);
    console.log("Value after adding", counter);
  }

  const subValue = () => {
    counter -= 1;
    setCounter(counter);
    console.log("Value after subtracting", counter);
  }  
  return (
    <>
    <h1>Virendra learning react {counter}</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={subValue}>Sub Value{counter}</button>
    </>
  )
}

export default App
