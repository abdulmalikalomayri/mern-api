const asyncHandler = require('express-async-handler');

// import the db 
const User = require('../models/userModel');
const Task = require('../models/taskModel');
/**
 * @desc Get All 
 * @route ./api/Tasks
 * @access private 
 * @param {*} req 
 * @param {*} res 
*/
const getTasks = asyncHandler(async (req, res) => {
    const task = await task.find({ user: req.user.id })
  
    res.status(200).json(tasks)
  })

/**
 * @desc Create  
 * @route ./api/Tasks
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const setTask = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    const task = await Task.create({
        text: req.body.text,
        // add auth to user Tasks
        user: req.user.id,
    })
     res.status(200).json(task)

})

/**
 * Update
 * @route ./api/Task/:id
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const updateTask = asyncHandler (async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
         
        throw new Error("Task Id not found ")
    }
    if(!req.body.text) {
        res.status(400)

        throw new Error('empty text body!')
    }

    // Validate User
    if(!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // validate user & Task
    if(task.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('User not auth');
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    res.status(200).json(updatedTask)
})

const showTask = asyncHandler(async (req, res) => {
    // Get id from praram 
    const task = await Task.findById(req.params.id)

    if(!task) {

        throw new Error("Wrong ID!")
    }
    res.status(200).json(task)
} )

/**
 * @route ./api/Task/:id
 * @desc delete Task
 * @access private 
 * @param {*} req 
 * @param {*} res 
 */
const deleteTask = asyncHandler (async (req, res) => {
    // get input
    const inputId = req.params.id;
    const task = await Task.findById(inputId)

    // validate 
    if(!Task) {
        throw new Error(`ID:${inputId} not found`)
    }
 
    // Validate User
    if(!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // validate user & Task
    if(task.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('User not auth');
    }
    await task.remove();
    // action
    // deleteTask = await Task.findByIdAndDelete(inputId)
    res.status(200).json({ id: req.params.id })
})

  module.exports = {
      getTasks, setTask, updateTask, deleteTask, showTask
  }