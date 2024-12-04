import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive") // after reload the bg change into olive default value of color was set to olive in the useState.
  
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}>Red</button>
         <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"blue"}}>blue</button>
         <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"yellow"}}>yellow</button>
         <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"black"}}>black</button>
         <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"green"}}>green</button>
         <button onClick={()=>setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"brown"}}>brown</button>
         <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"purple"}}>purple</button>
         <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"pink"}}>pink</button>
         <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"orange"}}>orange</button>
      </div>
    </div>
    </div>
  )
}

export default App
