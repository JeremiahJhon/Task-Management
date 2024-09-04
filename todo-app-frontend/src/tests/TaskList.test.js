import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList Component', () => {
  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];

  it('renders the task list', () => {
    render(<TaskList tasks={tasks} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('calls completeTask when the "Complete" button is clicked', () => {
    const completeTask = jest.fn();
    render(<TaskList tasks={tasks} completeTask={completeTask} />);
    fireEvent.click(screen.getAllByText('Complete')[0]);
    expect(completeTask).toHaveBeenCalledWith(1);
  });

  it('calls deleteTask when the "Delete" button is clicked', () => {
    const deleteTask = jest.fn();
    render(<TaskList tasks={tasks} deleteTask={deleteTask} />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(deleteTask).toHaveBeenCalledWith(1);
  });
});
