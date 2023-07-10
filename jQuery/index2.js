/*jq val() 사용*/
function getValue() {
  // input의 value를 가지고와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료 ~~");
}

/* css() 사용 */
function changeCssJs() {
  // span의 글씨크기 20px
  // 글자 색깔 빨간색
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function changeCssJq() {
  // 글자크기 40px
  // 글자색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJq() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
  //   a.href='https://www.naver.com'
}
function changeAttrJq() {
  // 다음으로 이동
  //   target='_self' 로 변경
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("target", "_self");
}

/* text() */
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js 로 변경 &hearts;";
}

function changeTextJq() {
  $(".p-text").text("jq로 변경 &hearts;");
}

/* html() */
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js 로 변경 &hearts;";
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}

// append
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식추가 js";

  ul.append(li);
}
function appendJq() {
  $(".colors").append("<li>마지막 자식추가 jq</li>");
}

// prepend
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<h4>첫자식추가 js</h4>";

  ul.prepend(li);
}
function prependJq() {
  $(".colors").prepend("<li><h4>첫자식추가 jq</h4></li>");
}

// before
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이전 형제요소로 추가 js";

  green.before(li);
}
function beforeJq() {
  $(".green").before("<li>이전 형제요소로 추가 jq</li>");
}

// after
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "다음 형제요소로 추가 js";

  green.after(li);
}
function afterJq() {
  $(".green").after("<li>다음 형제요소로 추가 jq</li>");
}

function findParent() {
  console.log($(".child2").parent());
}
function findParents() {
  console.log($(".child2").parents());
}
function findNext() {
  console.log($(".child2").next());
}
function findPrev() {
  console.log($(".child2").prev());
}
function findChildren() {
  console.log($(".child2").children());
}

function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("fs-50");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  console.log($("#hi").toggleClass("bg-pink"));
}
