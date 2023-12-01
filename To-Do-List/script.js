let btn = document.querySelector(".addBtn");
btn.addEventListener("click", funcTodo);

function funcTodo() {
  let inputValue = document.querySelector(".todoInput").value;

  if (inputValue == "") {
    console.log("Please type something");
    return;
  }
  console.log(inputValue);

  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", function () {
    li.classList.toggle("done"); // classlist has double work
  });

  let p = document.createElement("p");
  p.textContent = inputValue;

  let deleteBtn = document.createElement('button')
  deleteBtn.textContent='X' // creating the button
  deleteBtn.addEventListener('click',function(){
    li.remove()// remove has single work
  })

  li.appendChild(checkbox)
  li.appendChild(p)
  li.appendChild(deleteBtn)
  
  document.querySelector('.todoList').appendChild(li) //todolist was in html but li was only created in js

  document.querySelector('.todoInput').value=''
}

