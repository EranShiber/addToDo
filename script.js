const input = document.getElementById("input");
const form = document.getElementById("form");
const ul = document.getElementById("list");
ul.addEventListener("click", unDo);
form.addEventListener("submit", addDo);
ul.addEventListener("click", completeTodo)



function addDo(e){
    e.preventDefault();
   
   let li = document.createElement("li");
   li.className = "list-group-item myLi"
   li.innerHTML = input.value;
   if(input.value === ""){} else {
    let delBtn = document.createElement("button")
    delBtn.className = "delete btn btn-danger"
    delBtn.innerText = "Delete"
    li.appendChild(delBtn)
    ul.appendChild(li); 
    input.value = ""   
   }
}
function unDo(e) {
    if (e.target.className === "delete btn btn-danger"){
    let li = e.target.parentElement;
    ul.removeChild(li)    
    }
}

function completeTodo(e){
    let li = e.target;
    if(li.style.textDecoration === ""){
    li.style.textDecoration = "line-through"
    } else if (li.style.textDecoration = ""){
        li.style.textDecoration = "line-through"
    }
     
}

    
