let tasks = [];

function getAllTasks() {
    return tasks;
}

function addTask(task) {
    tasks.push(task);
}

function updateTask(id, updatedTask) {
    tasks = tasks.map(task => task.id === id ? updatedTask : task);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

function updateTaskOrder(newOrder) {
    tasks = newOrder;
}

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskOrder
};
