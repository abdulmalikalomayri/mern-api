const asyncHandler = require('express-async-handler')

// import the db 
const Goal = require('../models/goalModel')

/**
 * @desc Get All 
 * @route ./api/goals
 * @access private 
 * @param {*} req 
 * @param {*} res 
*/
const getGoals = asyncHandler(async (req, res) => {
    // select * 
    const goals = await Goal.find({})

    res.status(200).json(goals)
} )

/**
 * @desc Create  
 * @route ./api/goals
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
     res.status(200).json(goal)

})

/**
 * Update
 * @route ./api/goal/:id
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
         
        throw new Error("Goal Id not found ")
    }
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    res.status(200).json(updatedGoal)
})

/**
 * @route ./api/goal/:id
 * @desc delete goal
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoal = asyncHandler (async (req, res) => {
    // get input
    const inputId = req.params.id;
    const goal = await Goal.findById(inputId)

    // validate 
    if(!goal) {
        throw new Error(`ID:${inputId} not found`)
    }
    // action
    deleteGoal = await Goal.findByIdAndDelete(inputId)
    res.status(200).json(deleteGoal)
})

  module.exports = {
      getGoals, setGoal, updateGoal, deleteGoal,
  }