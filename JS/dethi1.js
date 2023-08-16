let brand = document.querySelector("#brand");
let amount = document.querySelector(".soluong");
let colors = document.querySelectorAll(".box div");
let submit = document.querySelector("button");
let img = document.querySelectorAll("img");
let result = document.querySelector(".result");
let imgpre = document.querySelector(".imgpre")
// Change brand
brand.addEventListener("change", function () {
  if (brand.value == "Honda") {
    for (let i = 0; i < img.length; i++) {
      img[i].src = img[i].src.replace("kia", "honda");
    }
  } else {
    for (let i = 0; i < img.length; i++) {
      img[i].src = img[i].src.replace("honda", "kia");
    }
  }
});
// Change color
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        imgpre.src = imgpre.src.replace("red" ,"black");
        imgpre.src = imgpre.src.replace("blue" ,"black");
        imgpre.src = imgpre.src.replace("white" ,"black");
        color = "màu đen";
        break;
      case 1:
        imgpre.src = imgpre.src.replace("black" ,"blue");
        imgpre.src = imgpre.src.replace("red" ,"blue");
        imgpre.src = imgpre.src.replace("white" ,"blue");
        color = "màu xanh"
        break;
      case 2:
        imgpre.src = imgpre.src.replace("black" ,"red");
        imgpre.src = imgpre.src.replace("blue" ,"red");
        imgpre.src = imgpre.src.replace("white" ,"red");
        color = "màu đỏ"
        break;
      case 3:
        imgpre.src = imgpre.src.replace("black" ,"white");
        imgpre.src = imgpre.src.replace("red" ,"white");
        imgpre.src = imgpre.src.replace("blue" ,"white");
        color = "màu trắng"
        break;
      default:
        break;
    }
  });
}
// Buy 
submit.addEventListener("click", function(){
    result.innerHTML = "Bạn đã đặt mua " + amount.value + " xe " + brand.value + " " + color; 
})