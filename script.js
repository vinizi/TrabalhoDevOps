// garante que o HTML carregou
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

        // clicar = concluir + ganhar pontos
        li.addEventListener("click", function () {

            li.style.textDecoration = "line-through";

            points += 10;
            pointsDisplay.textContent = points;

            // impede clicar de novo
            li.style.pointerEvents = "none";
        });

        list.appendChild(li);
        input.value = "";
    });

});