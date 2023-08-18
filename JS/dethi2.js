let yorn = document.querySelectorAll(".subnav input");
let img = document.querySelectorAll(".slider img");
let colors = document.querySelectorAll(".color div");
let ball = document.querySelector(".excute .ball");
for (let i = 0; i < yorn.length; i++) {
  yorn[i].addEventListener("change", function () {
    if(yorn[i].checked && yorn[i].value == "y"){
      ball.style.backgroundColor = "";
      ball.style.backgroundImage = `url(${img[0].src})`;
        for (let j = 0; j < img.length; j++) {
          img[j].addEventListener("click", function(){
            if (yorn[i].checked && yorn[i].value == "y") {
              ball.style.backgroundColor = "";
              ball.style.backgroundImage = `url(${img[j].src})`;
            }
          })
      }
    }else {
        for (let j = 0; j < colors.length; j++) {
          ball.style.backgroundImage = "";
          ball.style.backgroundColor = "red";
          colors[j].addEventListener("click", function(){
            if (yorn[i].checked && yorn[i].value == "n") {
              ball.style.backgroundImage = "";
              ball.style.backgroundColor = colors[j].classList;
            }
          })
      }
    }
  });
}
// y.addEventListener("click", function () {
//   let yorn = document.querySelectorAll(".subnav input");
//   ball.style.backgroundImage = `url(${img[0].src})`;
//   for (let i = 0; i < yorn.length; i++) {
//     for (let j = 0; j < img.length; j++) {
//       img[j].addEventListener("click", function () {
//         if (yorn[i].checked && yorn[i].value == "y") {
//           ball.style.backgroundColor = "";
//           ball.style.backgroundImage = `url(${img[j].src})`;
//         }
//       });
//     }
//   }
// });
// n.addEventListener("click", function () {
//   let yorn = document.querySelectorAll(".subnav input");
//   ball.style.backgroundColor = "red";
//   for (let i = 0; i < yorn.length; i++) {
//     if (yorn[i].checked && yorn[i].value == "n") {
//       ball.style.backgroundImage = "";

//     }
//   }
// })
