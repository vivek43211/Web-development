import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hooks
  let passwordRef = useRef(null)
  const passwordGentror = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyclipborad = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);

    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(() => {
    passwordGentror();
  }, [length, numberAllowed, charAllowed, passwordGentror])
  return (
    <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-400'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyclipborad}>copy</button>
      </div>
      <div className='flex justify-center align-middle text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setlength(e.target.value)
            }}

          />
          <label >length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultValue={numberAllowed}
            //id='numberInput'
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultValue={charAllowed}
            //id='numberInput'
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }} />
          <label htmlFor="Characters">Characters</label>
        </div>
      </div>
    </div>



  )
}

export default App
