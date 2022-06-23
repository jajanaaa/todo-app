"use strict";

const addButton = document.getElementById("add-todo");
const minusButton = document.getElementById("minus-todo");
const todoContainer = document.getElementById("todo-container");
const inputField = document.getElementById("input-field");

let circle;
let children;
addButton.addEventListener("click", function () {
  if (document.getElementById("no-tasks-p")) {
    document.getElementById("no-tasks-p").remove();
  }
  const paragraph = document.createElement("p");
  paragraph.classList.add("added-task");
  circle = '<i class="fa-regular fa-circle"></i>';
  let typed = inputField.value;
  paragraph.innerHTML = circle + typed;
  todoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    let circleChecked = '<i class="fa-solid fa-circle-check"></i>';
    paragraph.classList.toggle("checked");
    if (paragraph.classList.contains("checked")) {
      paragraph.innerHTML = circleChecked + typed;
    } else {
      paragraph.innerHTML = circle + typed;
    }
  });
  children = Array.from(todoContainer.children);
  //   console.log(children);
  const filtered = children.filter((element) =>
    element.classList.contains("checked")
  );
  console.log(filtered);
  //   const completed = document.querySelector("#completed");
  //   completed.addEventListener("click", function () {
  //     for (let i = 0; i < children.length; i++) {
  //       if(paragraph.classList.contains("checked") {
  //         elements[0].todoContainer.removeChild(elements[0]);
  //       })
  //     }
  //   });
});

// // console.log(todoContainer.length);
// const elements = Array.from(document.getElementsByClassName("checked"));
// console.log(elements);

// function removeElementsByClass(checked) {
//   const elements = Array.from(document.getElementsByClassName(checked));
//   //   while (elements.length > 0) {
//   //     elements[0].todoContainer.removeChild(elements[0]);
//   //   }
//   //   console.log(elements);
// }
