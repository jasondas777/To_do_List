document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">X</button>`;
    document.getElementById("taskList").appendChild(li);

    saveTask(taskText);
    taskInput.value = "";
}

function removeTask(button) {
    let taskText = button.parentElement.firstChild.textContent;
    button.parentElement.remove();
    removeTaskFromStorage(taskText);
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        let li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">X</button>`;
        document.getElementById("taskList").appendChild(li);
    });
}
