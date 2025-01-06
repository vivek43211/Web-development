import React from 'react'
import {useDisptach } from 'react-dom'
import authservice from '../../appwrite/Auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const disptach = useDisptach()

    const logouthandle = ()=>{
        authservice.logout().then(
          disptach(logout()) // logout is as a promise
        )
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logouthandle}>
      logout
    </button>
  )
}

export default LogoutBtn