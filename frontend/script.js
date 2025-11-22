// Em produção, troque essa URL pela URL do Railway/Render
const API_URL = 'https://mvc-layers-trabalho.onrender.com'; 

async function carregarTarefas() {
    const response = await fetch(`${API_URL}/tasks`);
    const tarefas = await response.json();
    
    const lista = document.getElementById('listaTarefas');
    lista.innerHTML = '';

    tarefas.forEach(tarefa => {
        const item = document.createElement('li');
        item.textContent = tarefa.title;
        lista.appendChild(item);
    });
}

async function adicionarTarefa() {
    const titleInput = document.getElementById('taskTitle');
    const title = titleInput.value;

    if(!title) return alert("Digite algo!");

    await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    });

    titleInput.value = '';
    carregarTarefas();
}

// Carrega as tarefas ao abrir a página
carregarTarefas();