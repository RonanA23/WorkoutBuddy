import {useState} from 'react'
import { addAuth } from '../API/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export const useSignup=()=>{
    const[error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null )

    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)

    
    const signup=async(name,email,password)=>{
        setIsLoading(true)
        setError(null)

    const response=await fetch('/api/users/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
            //SAVE TOKEN TO LOCAL STORAGE
            localStorage.setItem('user',JSON.stringify(json))
            // THEN SAVE JSON TO GLOBAL STATE
            dispatch(addAuth(json))   
            setIsLoading(false)

        }}
    return {signup,isLoading,error}
   }