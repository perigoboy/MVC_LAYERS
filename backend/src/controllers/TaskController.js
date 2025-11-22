const TaskService = require('../services/TaskService');

class TaskController {
    listar(req, res) {
        const tasks = TaskService.getAll();
        return res.json(tasks);
    }

    criar(req, res) {
        try {
            const { title } = req.body;
            const newTask = TaskService.create(title);
            return res.status(201).json(newTask);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new TaskController();