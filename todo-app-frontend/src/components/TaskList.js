import React from 'react';
import '../styles/TaskList.css';
import TaskItem from './TaskItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TaskList({ tasks, onDelete, onToggle, onReorder }) {
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const newTasks = Array.from(tasks);
        const [reorderedTask] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, reorderedTask);
        onReorder(newTasks);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                    <div 
                                        className='task-list'
                                        ref={provided.innerRef} 
                                        {...provided.draggableProps} 
                                        {...provided.dragHandleProps}
                                    >
                                        <TaskItem 
                                            task={task} 
                                            onDelete={onDelete} 
                                            onToggle={onToggle} 
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default TaskList;