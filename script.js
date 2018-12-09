const input = document.getElementById("input");
const form = document.getElementById("form");
const ul = document.getElementById("list");
ul.addEventListener("click", unDo);
form.addEventListener("submit", addDo);

function addDo(e){
    e.preventDefault();
   let li = document.createElement("li");
   li.className = "list-group-item"
   li.innerHTML = input.value;
    let delBtn = document.createElement("button")
    delBtn.className = "delete btn btn-danger float right"
    delBtn.innerText = "Delete"
    li.appendChild(delBtn)
    ul.appendChild(li); 
    input.value = ""   
}

function unDo(e) {
    let li = e.target.parentElement;
    ul.removeChild(li)
    
}

        
    
