// import "../src/style.css"

const TaskListContainer = document.querySelector('.todo-Container');

// create temp Object for the list tasks
const toDoTasks = [
  {
    description: 'Finish JS WebPack Task',
    completed: 'true',
    index: 1,
  },
  {
    description: 'Buy Groccerries',
    completed: 'false',
    index: 2,
  },
  {
    description: 'Study Madarine for 1 hour',
    completed: 'true',
    index: 3,
  },
  {
    description: 'Wash Cloths',
    completed: 'false',
    index: 4,
  },
  {
    description: 'Pay internet Bills',
    completed: 'true',
    index: 5,
  },
];
// create temp Object for the list tasks

// Create the task from the todoTasks object

const displayTasks = () => {
  toDoTasks.forEach((list) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="listLP">
        <input type="checkbox" name="" id="">
        <p class="task-to-be-done">${list.description}</p>
        </div>

        <div class="trash"><i class="fa-solid fa-trash-can"></i></div>
        
        `;
    TaskListContainer.appendChild(listItem);
  });
};

// Create the task from the todoTasks object
displayTasks();