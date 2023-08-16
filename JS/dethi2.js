let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let yorn = document.querySelectorAll(".subnav li input");
let ball = document.querySelector(".ball");
let img = document.querySelectorAll(".slider img");
//Kiem tra 

// Lay hinh anh
for (let i = 0; i < yorn.length; i++) {
  yorn[i].addEventListener("change", function () {
    if (yorn[i].value == "y") {
        changeImg();
    } else {
        ball.style.backgroundImage = "none";
        ball.style.backgroundColor = "red";
    }
  });
}

// Change image
function changeImg() {
  ball.style.backgroundImage = `url(${img[0].src})`;
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
      ball.style.backgroundImage = `url(${img[i].src})`;
    });
  }
}

start.addEventListener("click", function () {});
// Lay mau

function getColor() {
  let color = document.querySelectorAll(" .tool input");
  for (let i = 0; i < color.length; i++) {
    if (color[i].checked) {
      return color[i].value;
    }
  }
}
