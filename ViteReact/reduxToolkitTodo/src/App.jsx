import { useState } from 'react'
import './App.css'
import AddTodo from './compoments/AddTodo'
import Todo from './compoments/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div
  className="h-screen flex flex-col items-center justify-center  bg-cover bg-center w-screen"
  style={{
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20240414/pngtree-a-boy-study-in-his-table-image_15715183.jpg")', // Replace with your image URL
  }}
>
  <h1 className="text-5xl font-extrabold text-white mb-8">React Toolkit Todo App</h1>
  <div className="w-full max-w-2xl bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6">
    <Todo />
    <hr className="border-gray-700 my-6" />
    <AddTodo />
  </div>
</div>

      
    </>
  )
}

export default App
