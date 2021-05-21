import axios from 'axios';

const url = 'http://localhost:5000';

const API =  axios.create({ baseURL: url });

const api = '/todos'

export const getTasks = () => API.get(api);

export const createTask = (task) => API.post(api, task);

export const deleteTask = (id) => API.delete(`${api}/${id}`);