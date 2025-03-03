console.log("Add Task Working...");

// add task function
function addTask(container, inputTaskValue) {
  let task = document.createElement("div");
  task.innerHTML = `
            <div
              class="bg-white mt-4 p-5 rounded-xl shadow-md flex justify-between items-center"
            >
              <div class="items-center">
                <h1 class="text-gray-700 text-lg">${inputTaskValue}</h1>

                <h1 class="text-gray-400">${showCurrentTime()}</h1>
                <h1 class="text-gray-400">${showCurrentDate()}</h1>

              </div>
              <div class="flex space-x-3 gap-3">
                <button
                  id="done-task"
                  class="text-green-600 hover:text-green-800 transition duration-300"
                >
                  <i class="fa-solid fa-circle-check text-3xl"></i>
                </button>

                <button
                  id="edit-task"
                  class="text-indigo-600 hover:text-indigo-800 transition duration-300"
                >
                  <i class="fa-solid fa-pen-to-square text-3xl"></i>
                </button>

                <button
                  id="delete-task"
                  class="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <i class="fa-solid fa-trash text-3xl"></i>
                </button>
              </div>
            </div>
      `;

  container.appendChild(task);
}
