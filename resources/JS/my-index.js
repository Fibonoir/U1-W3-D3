const div = document.createElement("div");
div.className = "box";
document.body.appendChild(div);

const h1 = document.createElement("h1");
h1.innerText = "To Do List";
div.appendChild(h1);

const form = document.createElement("form");
div.appendChild(form);

const input = document.createElement("input");
input.placeholder = "TO DO";
input.required = true;
form.appendChild(input);

const button = document.createElement("button");
button.innerText = "ADD";
button.role = "ADD";
form.appendChild(button);

const ul = document.createElement("ul");
div.appendChild(ul);

const updateBoxHeight = () => {
    div.style.maxHeight = `${div.scrollHeight + ul.scrollHeight}px`;
}


form.onsubmit = (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    
    const textSpan = document.createElement("span"); 
    textSpan.innerText = input.value;
    li.appendChild(textSpan);
    
    const binIcon = document.createElement("i");
    binIcon.className = "fa fa-trash";
    binIcon.style.cursor = "pointer";
    binIcon.addEventListener("click", () => {
        ul.removeChild(li);
    })
    li.appendChild(binIcon)
    
    li.onclick = () => {
        textSpan.classList.toggle("lineThrough");
    };
    ul.appendChild(li);
    updateBoxHeight();
    input.value = ("");
    
}

