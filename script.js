const inputText = document.querySelector("#app__input-text");
const addBtn = document.querySelector("#app__add-btn");
const list = document.querySelector("#app__list");
const listItem = document.querySelector("#app__item");
const itemText = document.querySelector("#app__item-text");

const btnComplete = document.querySelector("#btn--complete");
const btnDelete = document.querySelector("#btn--delete");



addBtn.addEventListener("click", addTask);
list.addEventListener("click", deleteTask);
list.addEventListener("click", completeTask);

function addTask() {
    // If the input isn't empty, do the following
    if(inputText.value !== "") {
        // Create a new li for the task
            let newTask = document.createElement("li");
            newTask.classList.add("app__item");
        // Create a container for the text and Date, to put space between them and the buttons
            let appInner = document.createElement("div");
            appInner.classList.add("app__item-inner");
         // Create span with the user input text
            let newText = document.createElement("span");
            newText.classList.add("app__item-text");
            newText.textContent = inputText.value;

    /**********************  Getting Date start **************************/
        //  Create an h3 for Date
            let time = document.createElement("h3");
            let date = new Date();
            let days = date.getDate();
            days = days < 10 ? "0" + days : days;
            let months = date.getMonth();
            // Converting month into 12 month form and adding a 0 at the beginning if it's a month between 1 and 9
            months = months < 10 ? "0" + (months + 1) : months + 1;

            let years = date.getFullYear();
            let hours = date.getHours();
            if(hours > 0 && hours < 12) {
                hours = hours;
            } if(hours >= 13 && hours <= 23) {
                hours = hours - 12;
            } if(hours === 12) {
                hours = 12;
            } if(hours === 0) {
                hours = 12;
            }
            let minutes = date.getMinutes();

            // Get AM or PM depending on date.getHours property
            let amPm = "";
            if(date.getHours() > 0 && hours < 12) {
                amPm = "AM";
            } if(date.getHours() >= 13 && hours <= 23) {
                amPm = "PM";
            } if(date.getHours() === 12) {
                amPm = "PM";
            } if(date.getHours() === 0) {
                amPm = "AM";
            }


            time.innerHTML = `${months}.${days}.${years}, ${hours}:${minutes} ${amPm}`;
            time.classList.add("time");
            console.log(time);
    
    /**********************  Getting Date finish **************************/


        // Append the user input and Date to a container div
            appInner.append(newText, time);

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
       
        // Append the container to the li
  
            newTask.append(appInner, btnContainer);
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
}


function completeTask(e) {
    if(e.target.classList.contains("fa-check-circle")) {
      e.target.parentElement.parentElement.parentElement.classList.toggle("app__item--completed");

    };
}

function getDate() {
    console.log("working");
}

console.log(new Date().getDate());