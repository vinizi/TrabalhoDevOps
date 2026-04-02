function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    list.appendChild(li);
    input.value = "";
}