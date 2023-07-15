let action = document.querySelector(".action");
function checkedValue() {
  let radio = document.getElementsByName("math");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value;
    }
  }
}
action.addEventListener("click", function () {
  let x1 = Number(document.querySelector(".x1").value);
  let x2 = Number(document.querySelector(".x2").value);
  let result = document.querySelector(".result");
  if(x1 == "" || x2 == ""){
    result.value = "Hẫy nhập giá trị 2 số !";
  }
  else {
  switch (checkedValue()) {
    case 'cộng':
        x = x1 +x2;
      break;
    case 'trừ':
        x = x1 - x2;
        break;
    case 'nhân':
        x = x1 *x2;
        break;
    case 'chia':
        x = x1 /x2;
        break;
    default:
      break;
  }
  result.value = x;
}
});
