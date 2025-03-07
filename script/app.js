console.log("js working");

window.onload = function () {
  main();
};

function main() {
  // Get IDs
  let runningTime = document.getElementById("running-time");
  let greeting = document.getElementById("greeting");

  let addTaskBtn = document.getElementById("add-task");
  let inputTask = document.getElementById("task-input");

  let taskContainer = document.getElementById("task-list-container");

  // Greeting & Recent Date
  greeting.innerText = getGreeting();
  runningTime.innerText = showCurrentDate();

  // Load tasks from localStorage
  loadTasksFromLocalStorage(taskContainer);

  //  add task button
  addTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let inputTaskValue = inputTask.value;
    if (inputTaskValue === "") {
      alert("Mama Type Koro Kichu !!");
      return;
    }

    // clear the input
    inputTask.value = "";

    //add task
    addTask(taskContainer, inputTaskValue);

    // Save updated task list to localStorage
    saveTasksToLocalStorage();
  });
}
