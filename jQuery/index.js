//$("선택자")
//document.querySelector("")
//두개 같은 뜻임

console.log($("button"));
$("button").css("color", "red");

function submitjs() {
  //글자와속성 변경
  //안녕을 반갑습니다.로 바꿔
  //스타일을 boder2px solid red로
  const div = document.querySelector(".div1");
  div.innerHTML = "<b>반가워</b>";
  div.setAttribute("style", "border: 2px solid red");
}
function submitjq() {
  //안녕 -> 잘지내
  //  border 3px dotted blue

  $(".div1").html("<i>잘지내</i>");
  $(".div1").css("border", "3px dotted blue");
}
