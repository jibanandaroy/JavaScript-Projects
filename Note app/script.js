const notesContainer = document.querySelector('.notes_container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input_box');

const showNotes = () =>{
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()

const updateStorage = () =>{
    localStorage.setItem('notes',notesContainer.innerHTML);
} 

createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img)

})

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input_box");
        notes.forEach(nt =>{
            nt.onkeyup = () =>{
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})