const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
// Draw a rectangle
ctx.fillStyle = '#d7edf5';
ctx.fillRect(25, 25, 150, 95);
ctx.strokeStyle = '#155b8c';
ctx.lineWidth = 4;
ctx.strokeRect(25, 25, 150, 95);
// Draw a circle
ctx.beginPath();
ctx.arc(285, 75, 48, 0, Math.PI * 2);
ctx.fillStyle = '#f4c76b';
ctx.fill();
ctx.stroke();
// Draw a line
ctx.beginPath();
ctx.moveTo(390, 30);
ctx.lineTo(550, 120);
ctx.strokeStyle = '#087e8b';
ctx.lineWidth = 7;
ctx.stroke();
// Draw text
ctx.fillStyle = '#263445';
ctx.font = '22px Arial';
ctx.fillText('HTML5 Canvas', 190, 200);