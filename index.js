//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

function loadEventListeners(){
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//addTask function
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

//removeTask function
function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();
    }
  }
  console.log(e.target);
  e.preventDefault();
}

//clearTask function
function clearTasks(e){
  //taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
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
