var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Tọa độ trung tâm của canvas
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Bán kính hình tròn
var circleRadius = 100;

// Kích thước hình vuông
var squareSize = circleRadius * Math.sqrt(4); // Đảm bảo hình vuông bao quanh hình tròn

// Vẽ hình tròn
ctx.beginPath();
ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

// Tọa độ góc trên trái của hình vuông
var squareTopLeftX = centerX - squareSize / 2;
var squareTopLeftY = centerY - squareSize / 2;

// Vẽ hình vuông nằm ngoài hình tròn
ctx.beginPath();
ctx.rect(squareTopLeftX, squareTopLeftY, squareSize, squareSize);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

// Vẽ hình thoi bên trong hình tròn
ctx.beginPath();
ctx.moveTo(centerX, squareTopLeftY);
ctx.lineTo(squareTopLeftX + squareSize, centerY);
ctx.lineTo(centerX, squareTopLeftY + squareSize);
ctx.lineTo(squareTopLeftX, centerY);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

// Vẽ chữ "HTML5" bên trong hình thoi
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("HTML5", centerX, centerY);
