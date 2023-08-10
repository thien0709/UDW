let create = document.querySelector("#select button:nth-child(1)");
let tang = document.querySelector("#select button:nth-child(2)");
let giam = document.querySelector("#select button:nth-child(3)");


function randomList(max) {
  return Math.floor(Math.random() * max);
}
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
tang.addEventListener("click", function(){
    let arrTang = document.querySelector(".arrTang");
    arrTang.innerHTML = "Mảng tăng dần: " + display(bubbleSort(arr));
})
giam.addEventListener("click",function(){
    let arrGiam = document.querySelector(".arrGiam");
    arrGiam.innerHTML = "Mảng giảm dần: " + display(bubbleSortRev(arr));
})
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

function display(arr){
    let result = "";
    for(let i =0;i<arr.length ;i++){
        result = result + arr[i] + " ";
    }
    return result;
}