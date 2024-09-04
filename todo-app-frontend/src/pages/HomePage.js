import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { getTasks, createTask, updateTask, deleteTask, reorderTasks } from '../services/taskService';

function HomePage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(response => setTasks(response.data));
    }, []);

    const handleAddTask = (task) => {
        createTask(task).then(() => {
            setTasks([...tasks, task]);
        });
    };

    const handleToggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        updateTask(id, updatedTasks.find(task => task.id === id)).then(() => {
            setTasks(updatedTasks);
        });
    };

    const handleDeleteTask = (id) => {
        deleteTask(id).then(() => {
            setTasks(tasks.filter(task => task.id !== id));
        });
    };

    const handleReorderTasks = (newOrder) => {
        reorderTasks(newOrder).then(() => {
            setTasks(newOrder);
        });
    };    

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList 
                tasks={tasks} 
                onDelete={handleDeleteTask} 
                onToggle={handleToggleTask} 
                onReorder={handleReorderTasks}
            />
        </div>
    );
}

export default HomePage;
