import { useState } from 'react'

function App() {
  const [counter, setCount] = useState(15)
 let addvalue = () => {
  if(counter<=20){
    setCount(counter + 1);
    console.log("value " + counter);
  }
    
 }
 let removevalue = () => {
  if(counter>0){
    setCount(counter - 1);
    console.log("value " + counter);
  }
 
}
//let counter = 15;
  return (
    <>
      <h1>Vivek Vyas  || Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addvalue}>add counter : {counter}</button>
      <br />
      <button onClick={removevalue}>remove value: {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
