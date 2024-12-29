
import { useState  , useEffect} from 'react'
import './App.css'
import { ThemProvider } from './contexts/Theme'
import ThemeBtn from './compoments/ThemeButton'
import Card from './compoments/Cards'

function App() {
   const [themeMode , setThememode] =  useState("light")

   const darkMode = ()=>{
    setThememode("dark")
   }
   const lightMode =()=>{
    setThememode("light")
   }

     // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
      </ThemProvider>
      )
}

      export default App
