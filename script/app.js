console.log("js working");

window.onload = function () {
  main();
};

function main() {
  // Get IDs
  let runningTime = document.getElementById("running-time");
  let greeting = document.getElementById("greeting");

  let inputTask = document.getElementById("task-input");
  let addTaskBtn = document.getElementById("add-task");

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
      alert("Mama Blank  keno !!");
      return;
    }

    // clear the input
    inputTask.value = "";

    //add task
    addTask(taskContainer, inputTaskValue);

    // Save updated task list to localStorage
    saveTasksToLocalStorage();
  });

  // get the user name
  const userName = localStorage.getItem("userName");
  if (userName) {
    document.getElementById("user-name").innerText = userName;
  } else {
    window.location.href = "../index.html";
  }

  // Handle logout button
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "../index.html";
  });
}
