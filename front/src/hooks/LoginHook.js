import {useState} from 'react'
import { addAuth } from '../API/authSlice'
import { useDispatch } from 'react-redux'


export const useLogin=()=>{
    const dispatch=useDispatch()
    const[error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)

    const login=async(email,password)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch('/api/users/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})})
    
            const json= await response.json()

            if(!response.ok){
                setIsLoading(false)
                setError(json.error)}
            if(response.ok){
        
                localStorage.setItem('user',JSON.stringify(json))
                dispatch(addAuth(json)) 
                
             
            }
        }
        return {login,error}
}