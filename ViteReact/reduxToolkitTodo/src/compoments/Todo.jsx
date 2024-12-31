import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice'


function Todo() {
    const [input , setInput] = useState('')
    const disptach = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        disptach(addTodo(input))
        setInput('')  // it is only use to make usestae clean 
    }
    //dispatch uses the reduces to make change in the store 
  return (
    <form 
    onSubmit={addTodoHandler} 
    className="flex flex-wrap items-center justify-center space-x-0 sm:space-x-3 mt-12 gap-4"
  >
    <input
      type="text"
      className="flex-1 min-w-[200px] bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      aria-label="Todo Input"
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transform transition-transform duration-200 hover:scale-105"
      aria-label="Add Todo"
    >
      Add Todo
    </button>
  </form>
  
  )
}

export default Todo