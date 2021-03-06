//* Capturando elementos:
const formNewTask = document.getElementById("newTask");

const newTaskText = document.getElementById("newTaskText");

const emptyTask = document.getElementById("emptyTask");

const allTheTasks = document.getElementById("allTheTasks");

const doneTasks = document.getElementById("doneTasks");

//* Función para cancelar lo que ocurre por default con los botones:
formNewTask.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Do not refresh the website!");

  //* Texto de la nueva task:
  const task = newTaskText.value;
  console.log(task);

  //* Poniendo o sacando la clase "hidden":
  if (!task) {
    emptyTask.classList.remove("hidden");
    setTimeout(() => {
      emptyTask.classList.add("hidden");
    }, 3000);
    return;
  }

  //* Creando un "container" para todas las tasks y agregándole una "class":
  const allTheTasksContainer = document.createElement("div");
  allTheTasksContainer.classList.add("allTheTasksContainer");

  //* Creando el "input" para todas las tasks y agregándole una "class":
  const allTheTasksText = document.createElement("input");
  allTheTasksText.classList.add("allTheTasksText");

  //* Agregándole características a dicho "input":
  allTheTasksText.value = task;
  allTheTasksText.type = "text";
  allTheTasksText.setAttribute("readonly", "readonly");

  //* Ubicando los elementos a donde corresponde:
  allTheTasksContainer.appendChild(allTheTasksText);
  allTheTasks.appendChild(allTheTasksContainer);

  //* Creando un "container" para los botones y agregándole una "class":
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btnsContainer");

  //* Creando los "botones" y agregándoles una "class":
  const editBtn = document.createElement("button");
  const editClass = editBtn.classList;
  editClass.add("edit");

  const checkedBtn = document.createElement("button");
  const checkedClass = checkedBtn.classList;
  checkedClass.add("checked");

  const eraseBtn = document.createElement("button");
  const eraseClass = eraseBtn.classList.add("erase");

  //* Ubicando los elementos a donde corresponde:
  btnsContainer.appendChild(editBtn);
  btnsContainer.appendChild(checkedBtn);
  btnsContainer.appendChild(eraseBtn);

  allTheTasksContainer.appendChild(btnsContainer);

  editBtn.addEventListener("click", () => {
    editClass.toggle("edit");
    editClass.toggle("save");

    if (editBtn.contains("save")) {
      allTheTasksText.removeAttribute("readonly");
      allTheTasksText.focus();
    } else {
      allTheTasksText.setAttribute("readonly", "readonly");
    }
  });
  checkedBtn.addEventListener("click", () => {
    checkedClass.toggle("checked");
    checkedClass.toggle("notDone");
    allTheTasksText.classList.toggle("done");

    if (allTheTasksText.classList.contains("done")) {
      doneTasks.appendChild(allTheTasksContainer);
    }
  });
  eraseBtn.addEventListener("click", () => {
    allTheTasks.removeChild(allTheTasksContainer);
  });
  eraseBtn.addEventListener("click", () => {
    doneTasks.removeChild(allTheTasksContainer);
  });
});
