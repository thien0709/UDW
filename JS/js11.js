let m = document.querySelector("#tool #m");
let h = document.querySelector("#tool #h");
let n = document.querySelector("#tool #n");
let img = document.querySelector("#background img");
m.addEventListener("click",function(){
    img.style.scale = m.value + "%";
})

h.addEventListener("click",function(){
    img.style.scale = h.value + "%";
})

n.addEventListener("click",function(){
    img.style.scale = n.value + "%";
})

