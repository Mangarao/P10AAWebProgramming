const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    const li = event.target.parentNode;
    if (event.target.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  }
});
