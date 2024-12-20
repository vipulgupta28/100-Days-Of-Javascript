// coded By Vipul Gupta
const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Function to render todos
    function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const li = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = todo;

        const actions = document.createElement('div');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTodo(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(actions);
        todoList.appendChild(li);
      });
    }

    // Add todo
    function addTodo(e) {
      e.preventDefault();
      const newTodo = todoInput.value.trim();
      if (newTodo) {
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        renderTodos();
      }
    }

    // Edit todo
    function editTodo(index) {
      const newTask = prompt('Edit your task:', todos[index]);
      if (newTask !== null && newTask.trim() !== '') {
        todos[index] = newTask.trim();
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
      }
    }

    // Delete todo
    function deleteTodo(index) {
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    }

    // Initial render
    renderTodos();

    // Event listener for form submission
    todoForm.addEventListener('submit', addTodo);
