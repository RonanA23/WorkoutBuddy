const mongoose=require('mongoose')

const workoutSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please add a title'],
        },
        reps:{
            type:String,
            required:[true,'Please add reps'],
            
        },
        load:{
            type:String,
            required:[true,'Please add a load'],
        },
        user_id:{type:String,required:true,},
       
    },
    {timestamps:true}
)

module.exports= mongoose.model('Workout',workoutSchema)