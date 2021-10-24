const container = document.querySelector('ol');
container.innerHTML="";
const addBtn    = document.querySelector('button[name=add]');

addBtn.addEventListener('click',addNext);

const showBtn    = document.querySelector('button[name=show]');

showBtn.addEventListener('click',showData);

let idNo=Array.from({length: 200}, (_, i) => i + 1);

let todos = [];

function addNext() {

  for (let i = 0; i < idNo.length; i++) {
    
    const urlAddress=`https://jsonplaceholder.typicode.com/todos/${i}`;
    
    fetch(urlAddress)
    .then(response => response.json())
    .then(data=>todos.push(data));
  }
}

function showData() {

  todos.filter(todo => !todo.completed)
  .map(todo => todo.title)
  .map(title=>{
    let li = document.createElement('li');
    li.textContent=title;
    return li
  }).forEach(x=>container.appendChild(x))

}

