function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);
    input.value = "";
}