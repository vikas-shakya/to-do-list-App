const taskInput = document.getElementById("taskInput");
const taskToDo = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

// 🔹 Load tasks from Local Storage when the page loads
window.addEventListener("load", () => {
  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task)); // Display tasks from Local Storage
});

// 🔹 Function to add task to the UI
function addTaskToDOM(taskText) {
  const list = document.createElement("li");
  list.innerText = taskText;

  const delBtn = document.createElement("button");
  delBtn.className = "button-24";
  delBtn.innerHTML = "Delete";

  list.appendChild(delBtn);
  taskToDo.appendChild(list);

  // 🔹 Delete task when delete button is clicked
  delBtn.addEventListener("click", () => {
    list.remove();
    deleteTaskFromLocalStorage(taskText);
  });

  // 🔹 Mark task as completed when clicked
  list.addEventListener("click", () => {
    list.classList.toggle("completed");
  });
}

// 🔹 Function to delete a specific task from Local Storage
function deleteTaskFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("Tasks", JSON.stringify(tasks));
}

// 🔹 Add new task when button is clicked
addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") {
    alert("Cannot add an empty task");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

  // 🔹 Add task to Local Storage
  tasks.push(taskInput.value);
  localStorage.setItem("Tasks", JSON.stringify(tasks));

  // 🔹 Add task to UI
  addTaskToDOM(taskInput.value);

  // 🔹 Clear input field
  taskInput.value = "";
});
