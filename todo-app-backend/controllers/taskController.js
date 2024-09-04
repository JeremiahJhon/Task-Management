const taskModel = require('../models/taskModel');

function getTasks(req, res) {
    res.json(taskModel.getAllTasks());
}

function createTask(req, res) {
    const task = req.body;
    taskModel.addTask(task);
    res.status(201).json(task);
}

function updateTask(req, res) {
    const { id } = req.params;
    const updatedTask = req.body;
    taskModel.updateTask(id, updatedTask);
    res.json(updatedTask);
}

function deleteTask(req, res) {
    const { id } = req.params;
    taskModel.deleteTask(id);
    res.status(204).send();
}

function reorderTasks(req, res) {
    const newOrder = req.body;
    taskModel.updateTaskOrder(newOrder);
    res.status(200).json(newOrder);
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    reorderTasks
};
