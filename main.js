function obfuscation() {
  //난독화 함수
  let txt = document.getElementById("korean").value;
  for (let x = 1; x < txt.length; x++) {
    if (x % 3 === 0) {
      txt = txt.slice(0, x + 1) + "이" + txt.slice(x + 1, txt.length);
    }
  }
  document.getElementById("result").value = txt;
}

function reset() {
  //초기화 함수
  document.getElementById("korean").value = "";
  document.getElementById("result").value = "";
}

