import React,{useEffect, useState} from 'react'
import Ticket from '../Components/Ticket'
import WorkoutForm from '../Components/WorkoutForm'
import {useDispatch,useSelector} from 'react-redux'
import { setItems } from '../API/userSlice'


function Home() { 
  const[error,setError]=useState('')
  const {value}=useSelector((state)=>state.counter)
  //const {user}=useSelector((state)=>state.auth)
  const person=JSON.parse(localStorage.getItem('user'))
  const dispatch=useDispatch()

  useEffect(()=>{  
    const getWorkouts=async()=>{
      const response= await fetch('api/workouts',{
        headers:{
          'Authorization':`Bearer ${person.token}`
        }, })
      if(response.ok){
        const dat=await response.json()
        dispatch(setItems(dat))  
      }
      else{
        console.log('ERROR',response)
        setError(response.statusText)
      }
    }
      
      if(person){
    getWorkouts()
    console.log(value)
      }
      
    },[])
  
  return (
    <div className='flex mt-8'>
        <div className='w-[300px] mx-auto'>
          {error && <p className='border-2 bg-red-200 border-red-900 text-red-900 p-2'>{error}</p>}
     
       {value ? (value?.map((item)=>(
          <Ticket item={item} key={item._id}/> 
        ))):(<p>Nothing Here</p>)
      }
    
       
        </div>      
        <WorkoutForm/>
    </div>)}
export default Home