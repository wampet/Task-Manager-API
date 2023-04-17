 const express = require('express');
 const router = express.Router();
 const {
     getAllTasks,
     createTask,
     getTask,
     updateTask,
     deleteTask
 } = require('../controllers/tasks')
 //Chain the post to the get but the controller is different since we shall be creating a task
 router.route('/').get(getAllTasks).post(createTask)
 //Here the endpoint changes but it is in reference to the base one url
 router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

 module.exports = router