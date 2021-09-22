const inputText = document.querySelector("#app__input-text");
const addBtn = document.querySelector("#app__add-btn");
const list = document.querySelector("#app__list");
const listItem = document.querySelector("#app__item");
const itemText = document.querySelector("#app__item-text");

const btnComplete = document.querySelector("#btn--complete");
const btnDelete = document.querySelector("#btn--delete");



addBtn.addEventListener("click", addTask);
list.addEventListener("click", deleteTask);


function addTask() {
    // If the input isn't empty, do the following
    if(inputText.value !== "") {
        // Create a new li for the task
            let newTask = document.createElement("li");
            newTask.classList.add("app__item");
        // Create buttons and container for them
            let btnContainer = document.createElement("div");
            btnContainer.classList.add("#app__item-btns");

            let newCompleteBtn = document.createElement("button");
            newCompleteBtn.classList.add("btn--complete", "btn");
            newCompleteBtn.innerHTML = "<i class='fas fa-check-circle'></i>";

            let newDeleteBtn = document.createElement("button");
            newDeleteBtn.classList.add("btn--delete", "btn");
            newDeleteBtn.innerHTML = "<i class='fas fa-times-circle'></i>"

            btnContainer.append(newCompleteBtn, newDeleteBtn);
        // Create span with the user input text
            let newText = document.createElement("span");
            newText.classList.add("app__item-text");
            newText.textContent = inputText.value;
        // Append the info and buttons to the li
            newTask.append(newText, btnContainer);
        // Append the li to the ul
            list.append(newTask);

    // If the input is empty, tell the user to enter the info first    
    } else {
        alert("you need to add a task first");
    }

    // Reset the user input every time a new task is submitted
    inputText.value = "";
}


function deleteTask(e) {
    // Check if the clicked spot was an icon with class fa-times-circle and delete the task if it is 
    if(e.target.classList.contains("fa-times-circle")) {
        list.removeChild(e.target.parentElement.parentElement.parentElement);
    } 
    // Check if the clicked spot was a button containing the icon and delete the task if it is
    if(e.target.classList.contains("btn--delete")) {
        list.removeChild(e.target.parentElement.parentElement);
    }

    console.log(e.target);
}
