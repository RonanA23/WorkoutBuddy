import React, { useState } from 'react'
import { useLogin } from '../hooks/LoginHook'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {login,error,isLoading}=useLogin()

  const submitHandler=async(e)=>{
    e.preventDefault()
    await login(email,password)
    setEmail('')
    setPassword('')
    navigate('/')

  }
  return (
    <div className='w-[600px] mx-auto bg-white mt-[20px]  rounded-lg '>
        <p className='font-bold'>Login</p>
        <form
        className='p-2 flex flex-col'>
        <input className='my-2 rounded-lg' value={email} type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='my-2 rounded-lg' value={password} type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-black text-white hover:bg-gray-700 font-bold rounded-lg py-2 w-[580px]'
        onClick={submitHandler}
        disabled={isLoading}>Login</button>
        {error && <p>{error}</p>}

        </form>
   
    </div>
  )
}

export default Login