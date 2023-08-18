let y = document.querySelector(".subnav #y");
let n = document.querySelector(".subnav #n");
let img = document.querySelectorAll(".slider img");
let ball = document.querySelector(".excute .ball");

y.addEventListener("click", function () {
  let yorn = document.querySelectorAll(".subnav input");
  ball.style.backgroundImage = `url(${img[0].src})`;
  for (let i = 0; i < yorn.length; i++) {
    for (let j = 0; j < img.length; j++) {
      img[j].addEventListener("click", function () {
        if (yorn[i].checked && yorn[i].value == "y") {
          ball.style.backgroundColor = "";
          ball.style.backgroundImage = `url(${img[j].src})`;
        }
      });
    }
  }
});
n.addEventListener("click", function () {     
  let yorn = document.querySelectorAll(".subnav input");  
  ball.style.backgroundColor = "red";
  for (let i = 0; i < yorn.length; i++) {
    if (yorn[i].checked && yorn[i].value == "n") {
      ball.style.backgroundImage = "";

    }
  }
})