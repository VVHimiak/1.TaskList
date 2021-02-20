//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', addTask);
}

function addTask(e){
//   let val = taskInput.value;
//   let storage = JSON.parse(localStorage.getItem('tasks'));
  
//   let tasks;

// if(storage === null){
//   tasks = [];
// } else{
//   tasks = JSON.
// }

//Create list element
const li = document.createElement('li');
//Add class
li.className = 'collection-item';
//Create textNode and append to li
li.appendChild(document.createTextNode(taskInput.value))
//Create new link element
const link = document.createElement('a');
//Add class to link
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>'
//Append link to li
li.appendChild(link)
//Appen li to ul
taskList.appendChild(li);
//Clear input
taskInput.value = '';
  e.preventDefault();
}
