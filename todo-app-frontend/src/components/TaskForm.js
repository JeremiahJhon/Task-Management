import React, { useState } from 'react';
import '../styles/TaskForm.css';

function TaskForm({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({ id: Date.now().toString(), text, completed: false });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="New task..."
            />
            <button type="submit" className="delete-button">Add Task</button>
        </form>
    );
}

export default TaskForm;
