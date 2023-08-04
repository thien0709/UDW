function xemGio(){
    var date  = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    let clock = document.querySelector(".clock");
    clock.innerText = h + ":" + (m<10? "0"+m:m) + ":" + (s<10? "0" + s:s);
}