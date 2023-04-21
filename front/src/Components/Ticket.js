import React from 'react'
import { removeItem,addItem } from '../API/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Ticket({item}) {
  const dispatch=useDispatch()
  //const {user}=useSelector((state)=>state.auth)
  const person=JSON.parse(localStorage.getItem('user'))
  
  

  const deleteHandler=async()=>{
    if(!person){
      return
    }
    dispatch(removeItem(item._id))
  
    const response= await fetch('/api/workouts/'+item._id,{
      method:'DELETE',
      headers:{
        'Authorization':`Bearer ${person.token}`
      }, 
    })
  if(!response.ok){
    console.log('fiddle dee dee',item._id)
  }

   const json=await response.json()
   
  }
  // console.log((item.createdAt))
   //const time = formatDistanceToNow(new Date(item.createdAt))
  return (
    <div className='w-[600px] flex p-4 justify-between mx-auto bg-white my-12 h-[120px] rounded-lg cursor-pointer hover:bg-green-500'>
        <div>
        <div className='w-[200px] flex-col'>
        <p className='text-green-300 font-bold uppercase text-start'>{item.name}</p>
        <p className='font-bold text-start'>Load:{item.load}kg</p>
         <p className='font-bold text-start'>Reps:{item.reps}</p>
        </div>

       
       
        {/*<p className='italic text-start'>Created {time && <span className=''>{time}</span>}ago</p>*/}
        </div>

       
        <b className='text-green-400 hover:text-red-500 cursor-pointer text-bold' onClick={deleteHandler}>X</b>    
    </div>
  )
}

export default Ticket