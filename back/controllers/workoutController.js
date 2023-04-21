const asyncHandler=require('express-async-handler')
const express=require('express')
const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

const createWorkout=asyncHandler(async(req,res)=>{
    
    //const user_id= req.user
    const {_id}=req.user
    const user_id=_id
    const {name,reps,load}=req.body
    try {
        const workout=await Workout.create({name,reps,load,user_id})
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})       
    }   
})

const getWorkouts=asyncHandler(async(req,res)=>{
    const {_id}= req.user
    const workouts= await Workout.find({user_id:_id}).sort({createdAt:-1})
    res.status(200).json(workouts)
 
})

const deleteWorkout=asyncHandler(async(req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such workout'})
    }
    const workout= await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({error:'No such workout'})
    }
    res.status(200).json(workout)
    //res.status(200).json(workout)
    //res.json({mssg:'delete called'})
})

module.exports={
    createWorkout,
    getWorkouts,
    deleteWorkout
}