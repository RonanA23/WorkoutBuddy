const express= require('express')

//const { protect } = require('../middleware/authMiddleware')
const { getWorkouts, createWorkout, deleteWorkout } = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')
const router= express.Router()

router.use(requireAuth)

router.get('/',getWorkouts)

router.post('/create',createWorkout)

router.delete('/:id',deleteWorkout)

module.exports=router