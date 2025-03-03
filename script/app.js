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

  let doneTask = document.getElementById("done-task");
  let editTask = document.getElementById("edit-task");
  let deleteTask = document.getElementById("delete-task");

  let taskContainer = document.getElementById("task-list-container");
  let taskCompContainer = document.getElementById("Completed-task-container");

  // Greeting
  greeting.innerText = getGreeting();
  // Recent Date
  runningTime.innerText = showCurrentDate();

  // check task list
  let taskContainerError = document.createElement("p");
  if (!taskContainer.hasChildNodes()) {
    taskContainerError.innerHTML = `
      <p class="text-center text-red-500 text-xl">
        No Task Found. Please add a task first.....
      </p>
    `;
    taskContainer.appendChild(taskContainerError);
  }

  //  add task button
  addTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let inputTaskValue = inputTask.value;
    if (inputTaskValue === "") {
      alert("Mama Type Koro Kichu !!");
      return;
    }

    // remove the error
    taskContainerError.remove();

    // clear the input
    console.log(inputTaskValue);
    inputTask.value = "";

    //add task
    addTask(taskContainer, inputTaskValue);
  });
}
