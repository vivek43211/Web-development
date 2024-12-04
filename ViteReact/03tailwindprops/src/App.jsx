import { useState } from 'react'
import './App.css'
import Card from './cards'

function App() {
  let myobj = {
    name : "vivek",
    age :21,
    login : true
  }
  let myarr = [1.2,6,8]
  return (
    <>
      <h1 className=' bg-green-600  text-slate-300 p-4 rounded-2xl my-3'>Tailwind test</h1>
     <Card myname = "Sweeney" btx_text = "follow me" />
     <Card myname = "sydney" myimg = "https://www.usmagazine.com/wp-content/uploads/2021/05/5-Things-To-Know-About-Sydney-Sweeney-After-Anti-Bullying-Video-001.jpg?quality=86&strip=all"/>


    </>
  )
}

export default App
