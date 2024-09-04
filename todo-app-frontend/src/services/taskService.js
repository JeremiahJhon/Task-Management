import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tasks';

export function getTasks() {
    return axios.get(API_URL);
}

export function createTask(task) {
    return axios.post(API_URL, task);
}

export function updateTask(id, task) {
    return axios.put(`${API_URL}/${id}`, task);
}

export function deleteTask(id) {
    return axios.delete(`${API_URL}/${id}`);
}

export function reorderTasks(tasks) {
    return axios.put(`${API_URL}/reorder`, tasks);
}
