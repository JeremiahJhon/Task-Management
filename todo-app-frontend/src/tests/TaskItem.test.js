import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

describe('TaskItem Component', () => {
  const task = { id: 1, title: 'Test Task', completed: false };

  it('renders the task title', () => {
    render(<TaskItem task={task} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls completeTask when the "Complete" button is clicked', () => {
    const completeTask = jest.fn();
    render(<TaskItem task={task} completeTask={completeTask} />);
    fireEvent.click(screen.getByText('Complete'));
    expect(completeTask).toHaveBeenCalledWith(1);
  });

  it('calls deleteTask when the "Delete" button is clicked', () => {
    const deleteTask = jest.fn();
    render(<TaskItem task={task} deleteTask={deleteTask} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteTask).toHaveBeenCalledWith(1);
  });
});
