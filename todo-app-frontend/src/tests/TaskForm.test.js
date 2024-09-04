import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

describe('TaskForm Component', () => {
  it('renders the form input and button', () => {
    render(<TaskForm />);
    expect(screen.getByPlaceholderText('Enter a new task')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('calls addTask with the input value when the form is submitted', () => {
    const addTask = jest.fn();
    render(<TaskForm addTask={addTask} />);
    fireEvent.change(screen.getByPlaceholderText('Enter a new task'), {
      target: { value: 'New Task' },
    });
    fireEvent.click(screen.getByText('Add Task'));
    expect(addTask).toHaveBeenCalledWith('New Task');
  });
});
