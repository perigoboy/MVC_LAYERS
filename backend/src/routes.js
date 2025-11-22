const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

// Rota para listar tarefas
routes.get('/tasks', TaskController.listar);

// Rota para criar uma nova tarefa
routes.post('/tasks', TaskController.criar);

module.exports = routes;