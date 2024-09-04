const Task = require('../models/taskModel');

describe('Task Model', () => {
  it('should create a task object', () => {
    const task = new Task('Test Task');
    expect(task).toHaveProperty('title', 'Test Task');
    expect(task).toHaveProperty('completed', false);
    expect(task).toHaveProperty('id');
  });

  it('should toggle the completed state', () => {
    const task = new Task('Test Task');
    task.toggleComplete();
    expect(task.completed).toBe(true);
    task.toggleComplete();
    expect(task.completed).toBe(false);
  });
});
