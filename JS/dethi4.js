let randomBox = document.querySelector(".box");
let colors = document.querySelector("#colors input");
let selects = document.querySelectorAll('input[type="radio"]');
let value = "10";
// Get select
for (let i = 0; i < selects.length; i++) {
  selects[i].addEventListener("change", function () {

  });
}


function checkSelect(e){
    let min, max;
    if(e == '10'){
        min = 3;
        max = 10;
    }
    else {
        min = 11;
        max = 18;
    }
    return {max,min};
}
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
