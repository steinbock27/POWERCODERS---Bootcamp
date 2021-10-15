// JS TODO app

function ToDo(description, time, isDone = false) {
  this.task = description;
  this.time = time;
  this.isDone = isDone;
}

const todos = [
  new ToDo('celebrate birthday of this program', new Date(2022, 9, 11)),
  new ToDo('buy lunch', new Date(), true),
  new ToDo('buy dinner', new Date()),
];
console.table(todos);

function addTodo(todoName, dueDate, isTodoDone) {
  const todo = new ToDo(todoName, dueDate, isTodoDone);
  todos.push(todo);
  console.table(todos);
}

function markDone(index) {
  todos[index].isDone = true;
  console.table(todos);
}

// display TODO items

const container = document.getElementById('todo-list');

for (let i = 0; i < todos.length; i++) {
  const content = todos[i].task;

  const li = document.createElement('li');
  li.textContent = content;
  container.appendChild(li);

  if (todos[i].isDone) {
    li.classList.add('done');
  } else {
    li.addEventListener('click', function () {
      markDone(i);
      this.classList.add('done');
    });
  }
}
