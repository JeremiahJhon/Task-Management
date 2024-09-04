const request = require('supertest');
const express = require('express');
const taskRouter = require('../routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRouter);

describe('Task API', () => {
  it('should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new task', async () => {
    const newTask = { title: 'New Task' };
    const res = await request(app).post('/api/tasks').send(newTask);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe(newTask.title);
  });

  it('should update an existing task', async () => {
    const updatedTask = { title: 'Updated Task', completed: true };
    const res = await request(app).put('/api/tasks/1').send(updatedTask);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe(updatedTask.title);
    expect(res.body.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/api/tasks/1');
    expect(res.statusCode).toEqual(204);
  });
});
