let button = document.querySelector("button");
let result = document.querySelector("#header");
button.addEventListener("click" , function(){
    let colorBG = document.querySelector("#colorBG").value;
    let colorText = document.querySelector("#colorText").value;
    let content = document.querySelector("#content").value;
    let h1 = document.querySelector("h1");
    h1.innerText = content;
    result.style.color = colorText;
    result.style.backgroundColor = colorBG;
})