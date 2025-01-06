import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/Auth';
import {logout , login} from './store/authSlice'
import { Footer, Header } from './compoments'
import {Outlet } from 'react-router-dom'



function App() {
 // console.log(import.meta.env.VITE_APPWRITE_URL)
 const [Loding , setloding] =  useState(true);
 const dispatch = useDispatch();
 //it use the reducer authslice to access the store

 useEffect(()=>{
  authservice.getCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login(userData))
    } else {
      dispatch(logout())
    }
  })
  .finally(()=>setloding(false))
  // it ensure that something should be ececute so it can't give errorr over appp does't crash

 },[])


  return !Loding ? (
    <div className='h-screen  w-screen flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header/>
      <main>
      TODO:  <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ) : null
}

export default App
