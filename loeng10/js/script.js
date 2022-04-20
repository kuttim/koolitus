const todosListElement = document.getElementById('todos-list');
const emptyListElement = document.getElementById('empty-list');
const inputElement = document.getElementById('todo-input');

const todos = [
  {
    title: 'Todo 1',
    isCompleted: false,
  },
  {
    title: 'Todo 2',
    isCompleted: false,
  },
  {
    title: 'Todo 3',
    isCompleted: false,
  },
];

function renderList() {
  if (todos.length == 0) {
    todosListElement.style.display = 'none';
    emptyListElement.style.display = 'block';
  } else {
    emptyListElement.style.display = 'none';
    todosListElement.style.display = 'block';
  }

  todosListElement.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    todosListElement.innerHTML += `
            <div class="todo">
                <div class="todo-title" id="todo-title">${todos[i].title}</div>
                <div class="todo-delete" data-index="${i}">x</div>
            </div>
        `;
  }
}
todosListElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-title')) {
    event.target.classList.toggle('todo-done');
  }
});

todosListElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-delete')) {
    const index = parseInt(event.target.getAttribute('data-index'));
    todos.splice(index, 1);
    renderList();
  }
});

inputElement.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (inputElement.value != '') {
      todos.push({
        title: inputElement.value,
        isCompleted: false,
      });
      inputElement.value = '';
      renderList();
    }
  }
});
renderList();
