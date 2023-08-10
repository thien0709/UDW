let create = document.querySelector("#select button:nth-child(1)");
let tang = document.querySelector("#select button:nth-child(2)");
let giam = document.querySelector("#select button:nth-child(3)");
// Random list 
function randomList(max) {
  return Math.floor(Math.random() * max);
}
// Create 
create.addEventListener("click", function () {
  arr = [];
  let x = Number(document.querySelector("#container input").value);
  result = "";
  for (let i = 0; i < x; i++) {
    arr.push(randomList(50));
  }
  let origin = document.querySelector(".origin");
  origin.innerHTML = "Mảng ban đầu: " + display(arr);
});
// Sap xep tang
tang.addEventListener("click", function(){
    let arrTang = document.querySelector(".arrTang");
    arrTang.innerHTML = "Mảng tăng dần: " + display(bubbleSort(arr));
})
// Sap xep giam
giam.addEventListener("click",function(){
    let arrGiam = document.querySelector(".arrGiam");
    arrGiam.innerHTML = "Mảng giảm dần: " + display(bubbleSortRev(arr));
})
// Sap xep tang dan
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
// Sap xep giam dan
function bubbleSortRev(arr){
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
// Hien thi man hinh 
function display(arr){
    let result = "";
    for(let i =0;i<arr.length ;i++){
        result = result + arr[i] + " ";
    }
    return result;
}