/* var addToDo ={
    list:[
        {name:'buy banana',done:true},
        {name:'buy ground beef',done:false}
    ],
    add: function(todoName,isDone){
        return this.list.push({name:todoName,done: isDone})
    }
};

const container = document.getElementById("to-do-list");

for (let i = 0; i < addToDo.list.length; i++) {
    
    let li = document.createElement('li')

    li.textContent=addToDo.list[i].name
    container.appendChild(li)
    
} */


let title = document.querySelector('h1');
for (let i = 1; i < 3; i++){
  title.innerHTML += i;
}



let parag = document.querySelector('p');
for (let i = 1; i < 5; i++) {
    let node=document.createTextNode(i);
    
    parag.insertBefore(node,parag.childNodes[0]);   
}

let anchor = document.querySelector('a');
for (let i = 1; i < 8; i++) {
    let node=document.createTextNode(i);
    anchor.replaceChild(node,anchor.childNodes);
    
}
