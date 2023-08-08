let s1 = document.querySelector(".S1");
let s2 = document.querySelector(".S2");
let s3 = document.querySelector(".S3");
let position = document.querySelector(".position");
let ch = document.querySelector(".ch");
let dc = document.querySelector(".dc");
let kp = document.querySelector(".kp");
let tt = document.querySelector(".tt");
let c = document.querySelector(".c");
let x = document.querySelector(".x");
// Chuan hoa
ch.addEventListener("click", function(){
    s1.value = s1.value.trim();
    s1.value = hoaDauChuoi(s1.value);
});
// Dao chuoi
dc.addEventListener("click", function(){
    s1.value = s1.value.trim();
    s1.value = daoChuoi(s1.value);
})
// Thay the
tt.addEventListener("click" , function(){
    s1.value = s1.value.trim();

    s1.value = s1.value.replace(/JAVASCRIPT/i, "jQuery");
})
// Chen
c.addEventListener("click", function(){
    s1.value = insert(s1.value, parseInt(position.value), s2.value);
})
// Xoa 
x.addEventListener("click",function(){
    const regex = new RegExp(s2.value, "gi");
    s1.value = s1.value.replace(regex, "");
    s1.value = s1.value.trim();
})
// Ham chuan hoa
function hoaDauChuoi(str) {
    str = str.toLowerCase();
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
// Ham dao chuoi
function daoChuoi(str){
    let words = str.split(" ");
    let result = "";
    for(let i = words.length - 1 ; i >= 0 ;i--){
        result += words[i] + " "; 
    }
    return result;
}
function insert(str,pos,str1){
    string1 =  str.substring(0,pos);
    string2 =  str.substring(pos);
    return string1 + " " + str1 + " " + string2 ;  

}

