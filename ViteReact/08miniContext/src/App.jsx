import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Compoments/Login'
import Proflie from './Compoments/Proflie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React understanding is impoertant 

     </h1>
     <Login/>
     <Proflie/>
    </UserContextProvider>
  )
}

export default App
