"use strict";

const addButton = document.getElementById("add-todo");
const minusButton = document.getElementById("minus-todo");
const todoContainer = document.getElementById("todo-container");
const inputField = document.getElementById("input-field");

addButton.addEventListener("click", function () {
  document.getElementById("no-tasks-p").outerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.classList.add("added-task");
  paragraph.innerText = inputField.value;
  todoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  //   minusButton.addEventListener("click", function () {
  //     paragraph.classList.remove("red");
  //     todoContainer.removeChild(paragraph);
  //   });
});
