document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("taskInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");
    const pointsDisplay = document.getElementById("points");
    const levelDisplay = document.getElementById("level");
    const xpFill = document.getElementById("xpFill");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let points = parseInt(localStorage.getItem("points")) || 0;
    let level = parseInt(localStorage.getItem("level")) || 1;
    let xp = parseInt(localStorage.getItem("xp")) || 0;

    function saveData() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("points", points);
        localStorage.setItem("level", level);
        localStorage.setItem("xp", xp);
    }

    function updateUI() {
        pointsDisplay.textContent = points;
        levelDisplay.textContent = level;

        let xpNeeded = level * 50;
        let percent = (xp / xpNeeded) * 100;
        xpFill.style.width = percent + "%";
    }

    function renderTasks() {
        list.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = task.text;

            if (task.completed) {
                span.classList.add("completed");
            }

            span.addEventListener("click", function () {
                if (!task.completed) {
                    task.completed = true;

                    points += 10;
                    xp += 10;

                    let xpNeeded = level * 50;

                    if (xp >= xpNeeded) {
                        xp = 0;
                        level++;
                        alert("🎉 Level Up!");
                    }

                    saveData();
                    renderTasks();
                    updateUI();
                }
            });

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.classList.add("remove-btn");

            removeBtn.addEventListener("click", function () {
                tasks.splice(index, 1);
                saveData();
                renderTasks();
            });

            li.appendChild(span);
            li.appendChild(removeBtn);
            list.appendChild(li);
        });
    }

    button.addEventListener("click", function () {
        if (input.value.trim() === "") {
            alert("Digite uma tarefa!");
            return;
        }

        tasks.push({
            text: input.value,
            completed: false
        });

        input.value = "";
        saveData();
        renderTasks();
    });

    renderTasks();
    updateUI();
});