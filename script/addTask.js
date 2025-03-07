function addTask(container, inputTaskValue, isCompleted = false) {
  let task = document.createElement("div");
  task.classList.add(
    "bg-white",
    "mt-4",
    "p-5",
    "rounded-xl",
    "shadow-md",
    "flex",
    "justify-between",
    "items-center"
  );

  task.innerHTML = `
    <div>
      <h1>${inputTaskValue}</h1>
      <p class="text-gray-400">${showCurrentTime()}</p>
      <p class="text-gray-400">${showCurrentDate()}</p>
    </div>
    <div class="flex space-x-3 gap-3">
      <button id="done-task" 
       class="text-green-600 hover:text-green-800 transition duration-300">
        <i class="fa-solid fa-circle-check text-3xl"></i>
      </button>
      <button id="edit-task" 
         class="text-indigo-600 hover:text-indigo-800 transition duration-300">
        <i class="fa-solid fa-pen-to-square text-3xl"></i>
      </button>
      <button id="delete-task"
         class="text-red-500 hover:text-red-700 transition duration-300">
        <i class="fa-solid fa-trash text-3xl"></i>
      </button>
    </div>
  `;
  container.appendChild(task);

  //completed task
  if (isCompleted) {
    task.classList.remove("bg-white");
    task.classList.add("bg-green-200");
  }

  let deleteBtn = task.querySelector("#delete-task");
  let editBtn = task.querySelector("#edit-task");
  let doneBtn = task.querySelector("#done-task");
  let taskText = task.querySelector("div h1");

  // Delete Task
  deleteBtn.addEventListener("click", function () {
    task.remove();
    saveTasksToLocalStorage();
  });

  // Edit Task
  editBtn.addEventListener("click", function () {
    let newTaskValue = prompt("Edit your task:", taskText.innerText);
    if (newTaskValue !== null && newTaskValue.trim() !== "") {
      taskText.innerText = newTaskValue;
      saveTasksToLocalStorage();
    }
  });

  // Mark as Done
  if (!isCompleted) {
    doneBtn.addEventListener("click", function () {
      let completedContainer = document.getElementById(
        "Completed-task-container"
      );

      doneBtn.remove();
      editBtn.remove();
      task.classList.remove("bg-white");
      task.classList.add("bg-green-200");

      completedContainer.appendChild(task);

      saveTasksToLocalStorage();
    });
  }

  return task;
}
