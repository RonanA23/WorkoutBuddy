import React from 'react'
import { Link } from 'react-router-dom'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {useLogout} from '../hooks/LogoutHook'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../API/userSlice'
import { addAuth, removeAuth } from '../API/authSlice'
//import { useLogout } from '../hooks/LogoutHook'

function Navbar() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.auth)
  

  const person=count.value.name
  
  const user=localStorage.token
  
  //const dispatch=useDispatch()
  const {logout}=useLogout()
  //if (count?.name){console.log('THE USER COUNT IS',count?.name)}

  const exitHandler=()=>{
    logout()
    dispatch(addAuth({}))
    //dispatch(removeItem())
    //if(count?.name){console.log('NAME IS LOGGED OUT',count?.name)}
    
  }
  return (
    <div className='border-b-2 h-20 py-2 w-[full] flex justify-between '>
        <b className='text-4xl ml-[40px] m-2 font-bold'>Workout Buddy</b>
        <div>
            <ul className='flex justify-between w-[250px] m-2 items-center'>
              {person ? 
            <li className='text-gray-500  hover:text-green-600 font-bold cursor-pointer flex items-center justify-between w-[200px]'>
              
              <p className='uppercase text-green-600'>{person}</p>
              <p className='border-2 p-2 border-green-500' onClick={exitHandler}>Log Out</p></li>
              
              
               :
               <div className='flex justify-between w-[200px]'>
               
               <li className='text-gray-500 cursor-pointer hover:text-green-600 font-bold '><Link to='/register'><FaUser size={30}/> Register</Link></li>
               <li className='text-gray-500 cursor-pointer hover:text-green-600 font-bold '><Link to='/login'><FaSignInAlt size={30}/> Login</Link></li>
               </div> 
               
              }
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar