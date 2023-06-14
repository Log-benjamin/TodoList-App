/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


//Create the task from the todoTasks object

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
}

//Create the task from the todoTasks object

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4uL3NyYy9zdHlsZS5jc3NcIlxyXG5cclxuY29uc3QgVGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1Db250YWluZXInKTtcclxuXHJcblxyXG4vLyBjcmVhdGUgdGVtcCBPYmplY3QgZm9yIHRoZSBsaXN0IHRhc2tzXHJcbmNvbnN0IHRvRG9UYXNrcyA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmlzaCBKUyBXZWJQYWNrIFRhc2snLFxyXG4gICAgICAgIGNvbXBsZXRlZDogJ3RydWUnLFxyXG4gICAgICAgIGluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0J1eSBHcm9jY2VycmllcycsXHJcbiAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxyXG4gICAgICAgIGluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1N0dWR5IE1hZGFyaW5lIGZvciAxIGhvdXInLFxyXG4gICAgICAgIGNvbXBsZXRlZDogJ3RydWUnLFxyXG4gICAgICAgIGluZGV4OiAzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1dhc2ggQ2xvdGhzJyxcclxuICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXHJcbiAgICAgICAgaW5kZXg6IDQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUGF5IGludGVybmV0IEJpbGxzJyxcclxuICAgICAgICBjb21wbGV0ZWQ6ICd0cnVlJyxcclxuICAgICAgICBpbmRleDogNSxcclxuICAgIH0sXHJcbl07XHJcbi8vIGNyZWF0ZSB0ZW1wIE9iamVjdCBmb3IgdGhlIGxpc3QgdGFza3NcclxuXHJcblxyXG4vL0NyZWF0ZSB0aGUgdGFzayBmcm9tIHRoZSB0b2RvVGFza3Mgb2JqZWN0XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XHJcbiAgICB0b0RvVGFza3MuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RMUFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2stdG8tYmUtZG9uZVwiPiR7bGlzdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgVGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vQ3JlYXRlIHRoZSB0YXNrIGZyb20gdGhlIHRvZG9UYXNrcyBvYmplY3RcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9