//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

function loadEventListeners(){
  //DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//get Tasks from local storage
function getTasks(e){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    //Create list element
const li = document.createElement('li');
//Add class
li.className = 'collection-item';
//Create textNode and append to li
li.appendChild(document.createTextNode(task))
//Create new link element
const link = document.createElement('a');
//Add class to link
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>'
//Append link to li
li.appendChild(link)
//Append li to ul
taskList.appendChild(li);
  })
}

//addTask function
function addTask(e){
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
//Append li to ul
taskList.appendChild(li);
//Store in LS
storeInLocalStorage(taskInput.value);
//Clear input
taskInput.value = '';
  e.preventDefault();
}

function storeInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//removeTask function
function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();

    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  e.preventDefault();
}
//Remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//clearTask function
function clearTasks(e){
  //taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  //Clear tasks from local storage
  clearTasksFromLocalStorage();
}
//clearTasksFromLocalStorage function
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//filterTasks function
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.textContent;
    if(item.toLowerCase().indexOf(text) != -1){

      task.style.display = 'block';
      console.log(task)
    } else {
      task.style.display = 'none';

    }

  })
  
}
