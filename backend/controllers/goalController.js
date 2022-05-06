const asyncHandler = require('express-async-handler')

/**
 * @route ./api/goals
 * @desc get all goals
 * @access private 
 * @param {*} req 
 * @param {*} res 
*/
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals'})
} )

/**
 * @route ./api/goals
 * @desc create  goal
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)

        throw new Error('add text body!')
    }

    res.status(200).json({ message: 'Create Goal'})
})

/**
 * @route ./api/goal/:id
 * @desc update goal
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}`})
})

/**
 * @route ./api/goal/:id
 * @desc delete goal
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}`})
})

  module.exports = {
      getGoals, setGoal, updateGoal, deleteGoal,
  }