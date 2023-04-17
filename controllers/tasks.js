const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({
            task
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}
const createTask = async (req, res) => {
    //Place the logic in the try and catch
    try {
        //We create a new task by creating a new document
        const task = await Task.create(req.body)
        if (!task) {
            return res.status(404).json({
                msg: "No task with id: ${taskID}"
            })
        }
        res.status(201).json(task)
    } catch (error) {
        //if there is an error
        res.status(500).json({
            msg: 'error'
        })
    }
}
const getTask = async (req, res) => {
    try {
        const {
            id: taskID
        } = req.params
        const task = await Task.findOne({
            _id: taskID
        })
        res.status(200).json({
            task
        })
    } catch (error) {
        res.status(500).json({
            msg: 'error'
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOneAndDelete({
            _id: taskID
        })
        if (!task) {
            res.status(404).json({
                msg: 'This cannot be foung'
            })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            msg: 'error'
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOneAndUpdate({
            _id: taskID
        }, req.body)
        if (!task) {
            res.status(404).json({
                msg: 'This cannot be foung'
            })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            msg: 'error'
        })
    }
}
//We export it as an object since we are going to add more functions
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}