const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isDrawing = false;
let color = 'black';
let x, y;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEL.textContent = size;
}

function handleMouseDown(e) {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
}

function handleMouseUp() {
  isDrawing = false;
  x = undefined;
  y = undefined;
}

function handleMouseMove(e) {
  if (!isDrawing) return;
  const x2 = e.offsetX;
  const y2 = e.offsetY;
  drawCircle(x2, y2);
  drawLine(x, y, x2, y2);
  x = x2;
  y = y2;
}

function handleIncreaseClick() {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
}

function handleDecreaseClick() {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
}

function handleColorChange(e) {
  color = e.target.value;
}

function handleClearClick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mousemove', handleMouseMove);
increaseBtn.addEventListener('click', handleIncreaseClick);
decreaseBtn.addEventListener('click', handleDecreaseClick);
colorEl.addEventListener('change', handleColorChange);
clearEl.addEventListener('click', handleClearClick);
