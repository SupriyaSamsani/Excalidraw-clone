const pencil = document.getElementById("pencil");
let ispencilclicked = false;
function ClickingPencil(){
    pencil.classList.toggle("clicked");
    ispencilclicked = !ispencilclicked;
    if(ispencilclicked){
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMousedown);
    }
    else{
    canvas.style.cursor="auto";
    canvas.removeEventListener("mousedown", onMousedown)
    }
}
pencil.addEventListener("click", ClickingPencil);