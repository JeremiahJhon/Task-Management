import React from 'react';
import '../styles/TaskItem.css';
import '../styles/CompletedTasks.css';

function TaskItem({ task, onDelete, onToggle }) {
    return (
        <div className="task-item">
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggle(task.id)} 
            />
            <div className="task-title">
                {task.text}
            </div>
            <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
        </div>
    );
}

export default TaskItem;
