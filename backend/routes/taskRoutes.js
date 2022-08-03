
// below code line is like import express to use node express package and featuers
const express = require('express');
// import controllers
const { getTasks, setTask, updateTask, deleteTask, showTask } = require('../controllers/taskController');
const router = express.Router();
// import auth middlware which let us force the user to login to get Tasks 
const { protect } = require('../middleware/authMiddleware');
// we only need to add 2nd param protect to let the golas private 

// so router.get method has two pram 1- is the route 2- is the response 
// @post api/Task; @get api/Task
// router.route('/').get( getTasks).post(setTask);

router.put('/:id',protect, updateTask);

router.get('/',protect ,getTasks);
router.post('/',protect, setTask);
router.get('/:id',protect, showTask);

router.delete('/:id',protect, deleteTask);


module.exports = router;