let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let content1 = document.querySelector("#content1");
let content2 = document.querySelector("#content2");
console.log(c1,c2)
c1.addEventListener("click", function () {
    changeContent(c1,c2);
});
c2.addEventListener("click", function () {
    changeContent(c2,c1);
});

function changeContent(a,b){
    a.style.zIndex = 1;
    b.style.zIndex = 5;
}