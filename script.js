document.addEventListener("DOMContentLoaded", function () {

    let points = 0;

    const input = document.getElementById("taskInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");
    const pointsDisplay = document.getElementById("points");

    button.addEventListener("click", function () {

        if (input.value.trim() === "") {
            alert("Digite uma tarefa!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = input.value;

        li.addEventListener("click", function () {

            if (!li.classList.contains("completed")) {
                li.classList.add("completed");

                points += 10;
                pointsDisplay.textContent = points;
            }
        });

        list.appendChild(li);
        input.value = "";
    });

});