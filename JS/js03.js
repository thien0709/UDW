let G = document.querySelector(".G");
let X = document.querySelector(".X");
let result = document.querySelector("#result");
G.addEventListener("click", function () {
  let A = Number(document.querySelector(".A").value);
  let B = Number(document.querySelector(".B").value);
  let C = Number(document.querySelector(".C").value);
  if (A == "" || B == "" || C == "") {
    result.innerHTML = ` <h5> Bạn chưa nhập giá trị. Hãy nhập để tính </h5> `;
    return;
  }
  if (A == 0) {
    result.innerHTML = `<h5> Phương trình có 1 nghiệm x  = ${-C / B} </h5>`;
  } else {
    let delta = B * B - 4 * A * C;
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);
    let x = -B / (2 * A);
    if (delta == 0) {
      result.innerHTML = `<h5>Phương trình có 1 nghiệm là: </h5>
               <h5>x = ${x}</h5>`;
      return;
    }
    if (delta > 0) {
      result.innerHTML = `<h5>Phương trình có 2 nghiệm là: </h5>
               <h5>x1 = ${x1}</h5> <h5>x2 = ${x2}</h5>`;
    } else {
      result.innerHTML = `<h5>Phương trình vô nghiệm<h5>`;
    }
  }
});
X.addEventListener("click", function(){
    result.innerHTML =``;
})
