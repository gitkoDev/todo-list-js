const inputText = document.querySelector("#app__input-text");
const addBtn = document.querySelector("#app__add-btn");
const list = document.querySelector("#app__list");



addBtn.addEventListener("click", addTask);
function addTask() {
    let newTask = document.createElement("div");
    newTask.classList.add("app__item-container")
    console.log(newTask);
}
console.log(list);