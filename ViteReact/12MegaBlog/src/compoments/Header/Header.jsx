import React from 'react'
import {LogoutBtn , logo , Container} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const Navigate = useNavigate()
  const navitems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  // by defalut can also define the width of logo in logo comopmoent 
  return (
   <header lassName='py-3 shadow bg-gray-500'>
    <Container>
      <nav className='flex' >
        <div className='mr-4'>
         <Link to='/'>
          <logo/>   
         </Link>
        </div>
        <ul className='flex ml-auto'>
          {navitems.map((items)=> items.active ? (
            <li key={items.name}>
             <button
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
               onClick={()=>Navigate(items.slug)}>
              {items.name}
             </button>
            </li>
          ) : null)}
          {authStatus && 
          <li>
            <LogoutBtn/>
            </li>}
        </ul>
      </nav>

    </Container>
   </header>
  )
}

export default Header