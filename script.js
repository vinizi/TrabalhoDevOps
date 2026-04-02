const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
    if (input.value.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    // Marcar como concluída (Stage 2)
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    list.appendChild(li);
    input.value = "";
}