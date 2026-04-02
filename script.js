document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("taskInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");
    const pointsDisplay = document.getElementById("points");

    let points = 0;

    button.addEventListener("click", function () {

        if (input.value.trim() === "") {
            alert("Digite uma tarefa!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = input.value;

        // clicar = concluir + ganhar pontos
        li.addEventListener("click", function () {
            li.style.textDecoration = "line-through";

            points += 10;
            pointsDisplay.textContent = points;

            // impede ganhar ponto várias vezes
            li.style.pointerEvents = "none";
        });

        list.appendChild(li);
        input.value = "";
    });

});