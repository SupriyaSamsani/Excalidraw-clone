const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");







let previousposition = null;
function onMousedown(event){
previousposition = [event.clientX, event.clientY];
canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mouseup", onMouseup);
}
function onMousemove(event){
  
    let currentposition = [event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...previousposition);
    c.lineTo(...currentposition);
    c.stroke();
    c.closePath();
    previousposition = currentposition;
}
function onMouseup(event){

    canvas.removeEventListener("mousemove", onMousemove);
}