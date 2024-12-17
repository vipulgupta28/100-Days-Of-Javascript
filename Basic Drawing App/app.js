// Coded By Vipul Gupta
// Drawing Canvas
const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let isDrawing = false;
let color = '#000000';
let brushSize = 2; 
let lineDraw = false;
let startX, startY;

canvas.addEventListener("mousedown",()=>{
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = color;

});

canvas.addEventListener("mousemove",e =>{
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
});

//clear canvas
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

//Color Picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
  color = e.target.value;
});

//Brush Size
const brushSizeInput = document.getElementById('brushSize');
brushSizeInput.addEventListener('input', (e) => {
  brushSize = e.target.value;
});

//Add Notes
 canvas.addEventListener('dblclick', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    noteInput.style.left = `${e.clientX}px`;
    noteInput.style.top = `${e.clientY}px`;
    noteInput.style.display = 'block';
    noteInput.focus();

    noteInput.onkeydown = function(event) {
        if (event.key === 'Enter') {
            const text = noteInput.value;
            noteInput.value = '';
            noteInput.style.display = 'none';
            ctx.font = '16px Arial';
            ctx.fillStyle = color;
            ctx.fillText(text, mouseX, mouseY);
        }
    };
});

