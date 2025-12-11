// PASSO 1: Seleziono gli elementi
const button = document.querySelector(".addNew button");
const input = document.getElementById("nome");
const main = document.querySelector("main");

// PASSO 2: Creo la funzione che genera una nuova task completa
const generateNewTask = function () {
  const taskText = input.value;

  if (taskText === "") {
    alert("Scrivi qualcosa!");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.className = "addedElements";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task_" + Date.now();

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = taskText;

  ul.appendChild(li);
  label.appendChild(ul);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "resetOnlyOne";
  deleteBtn.type = "button";
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

  deleteBtn.addEventListener("click", function () {
    newDiv.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked === true) {
      li.style.textDecoration = "line-through";
      li.style.color = "#999";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "#333";
    }
  });

  newDiv.appendChild(checkbox);
  newDiv.appendChild(label);
  newDiv.appendChild(deleteBtn);

  main.appendChild(newDiv);

  input.value = "";
};

button.addEventListener("click", generateNewTask);

// CESTINO IN ALTO
const trashAll = document.querySelector("menu a");

const deleteAllTasks = function () {
  const conferma = confirm("Confermi di voler cancellare tutto?");

  if (conferma === true) {
    const allTasks = document.querySelectorAll(".addedElements");
    allTasks.forEach(function (task) {
      task.remove();
    });
  }
};

trashAll.addEventListener("click", deleteAllTasks);
