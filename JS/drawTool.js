let widthPaint = 5;
let color = "#000000"; // Use "#" for the hexadecimal color code
let mouse = false; // Initialize as false
let preX, preY;
let canvas = document.querySelector("#canvas");
let draw = canvas.getContext("2d");

canvas.addEventListener("mousedown", function (e) {
  preX = e.pageX - canvas.offsetLeft;
  preY = e.pageY - canvas.offsetTop;
  mouse = true; // Set mouse to true when clicked
});

canvas.addEventListener("mousemove", function (e) {
  if (mouse) {
    draw.strokeStyle = color;
    draw.lineWidth = widthPaint; // Use lineWidth instead of strokeWidth
    draw.lineJoin = "round";
    draw.beginPath();
    draw.moveTo(preX, preY);
    draw.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    draw.closePath();
    draw.stroke();
    preX = e.pageX - canvas.offsetLeft;
    preY = e.pageY - canvas.offsetTop;
  }
});

canvas.addEventListener("mouseup", function () {
  mouse = false; // Reset mouse when released
});
// Change color
let colors = document.querySelector("#color");
colors.addEventListener("change", function () {
  color = colors.value;
});
// Change width
let widthPaints = document.querySelectorAll('input[name="paint"]');
for (let i = 0; i < widthPaints.length; i++) {
  widthPaints[i].addEventListener("click", function () {
    switch (widthPaints[i].value) {
      case "thin":
        widthPaint = 1;
        break;
      case "medium":
        widthPaint = 5;
        break;
      case "thick":
        widthPaint = 10;
        break;
      default:
        break;
    }
  });
}
// Delete
 let button = document.querySelector("button");
 button.addEventListener("click", function(){
    let widthCanvas = canvas.offsetWidth;
    let heightCanvas = canvas.offsetWidth;
    draw.fillStyle = "#ffffff";
    draw.rect(0,0,widthCanvas,heightCanvas);
    draw.fill();
 })