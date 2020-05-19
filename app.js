//Selector
const todoInTitle = document.querySelector(".title");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck)
//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInTitle.value ;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //CHECK MARK Button
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);
  //CHECK trash Button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);
  //append to list
  todoList.appendChild(todoDiv);
  todoInTitle.value = "";
}
function deleteCheck(e){
    const item = e.target;
    //Delete
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend', ()=>
            todo.remove()
        );
    }

    //checked
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}