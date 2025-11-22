const { Task, tasks } = require('../models/TaskModel');

class TaskService {
    getAll() {
        return tasks;
    }

    create(title) {
        if (!title) {
            throw new Error("O título é obrigatório");
        }
        const id = tasks.length + 1;
        const newTask = new Task(id, title, false);
        tasks.push(newTask);
        return newTask;
    }
}

module.exports = new TaskService();