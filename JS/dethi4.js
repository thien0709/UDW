let randomBox = document.querySelectorAll(".box");
let colors = document.querySelector("#colors input");
let selects = document.querySelectorAll('input[type="radio"]');
let value = "10";
let button = document.querySelector("button");
// Get select
function getSelect() {
  for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener("change", function () {
      value = selects[i].value;
    });
  }
}
// Button
button.addEventListener("click", function () {
  getSelect();
  let x = checkSelect(value);
  do {
    var arrAdd = randomNumber();
    var sumArr = sumArray(arrAdd);
    console.log(x.min, x.max);
  } while (sumArr < x.min || sumArr > x.max);
  for (let i = 0; i < randomBox.length; i++) {
    randomBox[i].innerHTML = arrAdd[i];
  }
  let result = document.querySelector("#result h3:nth-child(2)");
  let score = Number(result.innerHTML);
  result.innerHTML = score + sumArr;
});

// Check select
function checkSelect(e) {
  let min, max;
  if (e == "10") {
    min = 3;
    max = 10;
  } else {
    min = 11;
    max = 18;
  }
  return { max, min };
}
// Random
function randomNumber() {
  let min = 1;
  let max = 6;
  let arrNumber = [];
  let a = Math.floor(Math.random() * (max - min + 1)) + min;
  let b = Math.floor(Math.random() * (max - min + 1)) + min;
  let c = Math.floor(Math.random() * (max - min + 1)) + min;
  arrNumber.push(a);
  arrNumber.push(b);
  arrNumber.push(c);
  return arrNumber;
}
// Sum
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Change color
colors.addEventListener("change", function () {
  for (let i = 0; i < randomBox.length; i++) {
    randomBox[i].style.color = colors.value;
  }
});
