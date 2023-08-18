let yorn = document.querySelectorAll(".subnav input");
let img = document.querySelectorAll(".slider img");
let colors = document.querySelectorAll(".color div");
let ball = document.querySelector(".excute .ball");
//Change color when load website 
for (let i = 0; i < yorn.length; i++) {
  for (let j = 0; j < colors.length; j++) {
    colors[j].addEventListener("click", function () {
      if (yorn[i].checked && yorn[i].value == "n") {
        ball.style.backgroundImage = "";
        ball.style.backgroundColor = colors[j].classList;
      }
    });
  }
}

// Change color or image
for (let i = 0; i < yorn.length; i++) {
  yorn[i].addEventListener("change", function () {
    if (yorn[i].checked && yorn[i].value == "y") {
      ball.style.backgroundColor = "";
      ball.style.backgroundImage = `url(${img[0].src})`;
      for (let j = 0; j < img.length; j++) {
        img[j].addEventListener("click", function () {
          if (yorn[i].checked && yorn[i].value == "y") {
            ball.style.backgroundColor = "";
            ball.style.backgroundImage = `url(${img[j].src})`;
          }
        });
      }
    } else {
      for (let j = 0; j < colors.length; j++) {
        ball.style.backgroundImage = "";
        ball.style.backgroundColor = "red";
        colors[j].addEventListener("click", function () {
          if (yorn[i].checked && yorn[i].value == "n") {
            ball.style.backgroundImage = "";
            ball.style.backgroundColor = colors[j].classList;
          }
        });
      }
    }
  });
}
// Start or stop
let startBall = document.querySelector(".button .start");
let stopBall = document.querySelector(".button .stop");
let dx = 5;
let dy = 7;

startBall.addEventListener("click", function () {
  intervalId = setInterval(changePos, 100);
});

stopBall.addEventListener("click", function () {
  clearInterval(intervalId);
});

// Change pos of ball
function changePos() {
  let widthFr = document.querySelector(".excute").offsetWidth;
  let heightFr = document.querySelector(".excute").offsetHeight;
  let widthBall = ball.offsetWidth;
  let heightBall = ball.offsetHeight;
  let ballLeft = ball.offsetLeft ;
  let ballTop = ball.offsetTop;
  if (ballLeft < 0 || ballLeft + widthBall >= widthFr) {
    dx = -dx;
  }
  if (ballTop < 0 || ballTop + heightBall >= heightFr) {
    dy = -dy;
  }

  ball.style.top = `${ballTop + dy}px`;
  ball.style.left = `${ballLeft + dx}px`;
}
