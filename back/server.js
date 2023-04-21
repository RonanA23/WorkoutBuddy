path=require('path')
const express=require('express')
const { default: mongoose } = require('mongoose')
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config()
const PORT = process.env.PORT ||3001


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/workouts',require('./routes/workoutRoutes'))

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, '../front/build')))

    app.get('*',(req,res)=>
    res.sendFile(_dirname,'../','front','build','index.html'))
} else{
    app.get('/',(req,res)=>{
        res.status(200).json({message:'Welcome to the Workout Buddy App'})
    })
}

app.use(errorHandler)

//test mongodb+srv://ronananderson23:March2023@marchcluster.eyx00ls.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://ronananderson23:${process.env.PASSWORD}@marchcluster.eyx00ls.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('connected to database')
    app.listen(PORT,()=>{
        console.log('LISTENING ON 3001')
    })
})

.catch((err)=>{
    console.log(err)
})


