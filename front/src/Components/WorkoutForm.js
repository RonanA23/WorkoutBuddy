import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../API/userSlice'

function WorkoutForm() {
    const dispatch=useDispatch()
    const[name,setName]=useState('')
    const[load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    //const {user}=useSelector((state)=>state.auth)

    const submitHandler=async(e)=>{
        const person=JSON.parse(localStorage.getItem('user')) 
        //const user_id=person._id

        e.preventDefault()
       // console.log('user_id',user_id)
        if(!person){
            return}
        
        const workout={name,load,reps}
        const response=await fetch('/api/workouts/create',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${person.token}` },})

        if(!response.ok){
            console.log('ERROR in Submit Handler!',response)
        }
        const json= await response.json()
        console.log('SUBMITTED',json)
        setName('')
        setLoad('')
        setReps('')
        dispatch(addItem(workout))
    }

  return (
    <div className=' rounded-lg w-[400px] mx-auto p-4 mt-8'>
        <p className='font-bold text-xl'>Add a New Workout</p>
        <div className='w-[200px] mx-auto'>
            <form>
                <p className='text-start '>Exercise Title</p>
                <input value={name} type='text'  className='w-[300px] my-2  h-8' onChange={(e)=>setName(e.target.value)} />
                <p className='text-start'>Load in (kg)s</p>
                <input value={reps} type='number'   className='w-[300px] my-2  h-8' onChange={(e)=>setReps(e.target.value)}/>
                <p className='text-start'>Reps</p>
                <input value={load} type='number'  className='w-[300px] my-2  h-8'  onChange={(e)=>setLoad(e.target.value)}/>
                <button className='w-[300px] mt-2 h-8 hover:bg-green-800 hover:scale-y-9 bg-green-500 text-white font-bold rounded-lg' onClick={submitHandler}>Add Workout</button>
            </form>
        </div>
    </div>
  )
}

export default WorkoutForm