const el = document.querySelector("#page");
const link = el.querySelector("img");

function setColor(){


const input = document.querySelectorAll("input")[0];

el.style.color = input.value;

}

function setLink(){
    const input = document.querySelectorAll("input")[1];
    link.setAttribute("src", input.value);
}

function toggleBold(){
    el.classList.toggle("bold");

}
function toggleItalic(){
    el.classList.toggle("italic");
}
function toggleUnderLine(){

el.classList.toggle("underline");
    
}
function addMonospace(){
    el.classList.add("grey-text","mono");
}
function removeFormat(){
    el.classList.remove("bold","italic","underline","grey-text","mono");
}