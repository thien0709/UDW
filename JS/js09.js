let create = document.querySelector("#select button:nth-child(1)");
let tang = document.querySelector("#select button:nth-child(2)");
let giam = document.querySelector("#select button:nth-child(3)");
let arr = [];

function randomList(max) {
  return Math.floor(Math.random() * max);
}
create.addEventListener("click", function () {
  let x = Number(document.querySelector("#container input").value);
  for (let i = 0; i < x; i++) {
    arr += randomList(50) + " ";
  }
  let origin = document.querySelector(".origin");
  origin.innerHTML = "Mảng ban đầu: " + arr;
});
