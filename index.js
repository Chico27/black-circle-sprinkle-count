const line = 10;
const column = 10;
const maxRectangle = line*column;
var limitCt = 0;
window.onload = function() {
  setInterval("sprinkle()", 1000);

  let k = 1;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      selectChangeCt = Math.floor(Math.random()*9)+1
      const div = document.createElement('div');
      div.id='black_rectangele_' + k;
      div.classList.add('box');
      div.classList.add('flex');
      div.classList.add('having_ct_' + selectChangeCt);
      div.classList.add('change_ct_' + selectChangeCt);
      document.body.appendChild(div);
      k++;
    }
    const div2 = document.createElement('div');
    document.body.appendChild(div2);
  }
}

//現在時刻を表示する関数
function sprinkle(){
  ct = 1;
  while(ct <= maxRectangle){
    let attr = document.getElementById("black_rectangele_" + ct);
    let attrClass =  attr.className;
    let chars = attrClass.split(' ');
    let containDisappear = false;

    if (chars.includes("box_disappear")) {
      chars.splice(chars.indexOf("box_disappear"), 1);
      containDisappear = true;
    }

    let having_ct = chars[2].slice(-1);
    let change_string = chars[3];
    let change_ct = change_string.slice(-1);
    change_ct--;
    if (change_ct == 0){
      // console.log(containDisappear)
      if (!containDisappear) {
        // console.log(true)
        attr.classList.add("box_disappear");
      } else {
        // console.log(false)
        attr.classList.remove("box_disappear");
      }
      change_ct = having_ct;
    }
    attr.classList.remove(change_string)
    attr.classList.add('change_ct_' + change_ct)
    // if(!chars.indexOf(pattern)){
    //   console.log(chars[string.indexOf(pattern)])
    // }
    ct++;
  }
}
