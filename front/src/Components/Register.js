import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSignup } from '../hooks/RegisterHook'
import {useNavigate} from 'react-router-dom'


function Register() {
  
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {signup,error,isLoading}=useSignup()
  const navigate=useNavigate()
  

  const submitHandler=(e)=>{
    e.preventDefault()
    //const object={email,password}
    signup(name,email,password)
    setPassword('')
    setEmail('')
    setName('')
    //navigate('/')
  }
  return (
    <div className='w-[600px]  mx-auto bg-gray-300 rounded-lg '>
        <div className=''>
        <p className='font-bold p-4'><FaUser size={40} className='' />Register</p>
        <p>Please Create An Account</p>
        <form
        className='p-2 flex flex-col'>
          <input className='my-2 rounded-lg' value={name} type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <input className='my-2 rounded-lg' value={email} type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='my-2 rounded-lg' value={password} type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-black text-white hover:bg-gray-700 font-bold rounded-lg py-2 w-[580px]'
        onClick={submitHandler}
        disabled={isLoading}
        >Register</button>

        </form>
        {error && <p className='bg-red-300 h-8 w-[200px] font-bold text-red-900 border-red-900 border-2 mb-2'>{error.message}</p>}

        </div>
      
   
    </div>
  )
}

export default Register