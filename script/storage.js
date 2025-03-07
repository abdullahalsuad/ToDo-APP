// Save tasks to localStorage
function saveTasksToLocalStorage() {
  let tasks = [];
  let completedTasks = [];

  // Get active tasks
  let taskElements = document.querySelectorAll("#task-list-container > div");
  taskElements.forEach(function (taskElement) {
    let taskText = taskElement.querySelector("h1").innerText;
    tasks.push(taskText);
  });

  // Get completed tasks
  let completedTaskElements = document.querySelectorAll(
    "#Completed-task-container > div"
  );
  completedTaskElements.forEach(function (taskElement) {
    let taskText = taskElement.querySelector("h1").innerText;
    completedTasks.push(taskText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

// Load tasks from localStorage
function loadTasksFromLocalStorage() {
  let taskContainer = document.getElementById("task-list-container");
  let completedContainer = document.getElementById("Completed-task-container");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

  // Load active tasks
  tasks.forEach(function (taskText) {
    addTask(taskContainer, taskText, false);
  });

  // Load completed tasks
  completedTasks.forEach(function (taskText) {
    addTask(completedContainer, taskText, true);
  });
}
