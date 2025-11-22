// Representação dos dados
class Task {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

// Simulação de Banco de Dados em memória
let tasks = []; 

module.exports = { Task, tasks };