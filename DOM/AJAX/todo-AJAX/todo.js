const container = document.querySelector('ol');

const addBtn    = document.querySelector('button[name=add]');

addBtn.addEventListener('click',addNext);


let idNo=Array.from({length: 200}, (_, i) => i + 1);

function addNext() {

  idNo.sort(()=>Math.random()-0.5);

  const urlAddress=`https://jsonplaceholder.typicode.com/todos/${idNo.splice(0,1)}`;
  const li = document.createElement('li');

  fetch(urlAddress)
  .then(response => response.json())
  .then(data => li.textContent= data.title)

  container.appendChild(li);
  
}