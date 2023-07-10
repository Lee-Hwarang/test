const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

// btn1.addEventListener(동작이름, function(){})
btn1.addEventListener("click", function () {
  alert("버튼1");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
});

const container = document.getElementById("container");
console.log(container);
btn2.addEventListener("mouseover", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

// btn3
function changeColor() {
  const divs = document.querySelectorAll("#container div");

  for (let div of divs) {
    div.style.backgroundColor = "orange";
  }
  //마지막 요소만 빨간색으로
  divs[divs.length - 1].style.backgroundColor = "red";
}

btn3.addEventListener("click", changeColor);

function changeBtnColor() {
  this.style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);

console.log(window);
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 600) {
    document.querySelector(".pos").style.opacity = "1";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      console.log("up");
      break;

    case "ArrowDown":
      console.log("Down");
      break;
    case "ArrowRight":
      console.log("Right");
      break;
    case "ArrowLeft":
      console.log("Left");
      break;
  }

  // console.log(event.key);
  // console.log(event.code);
});

const chgInput = document.getElementById("change-input");

console.log(chgInput);

chgInput.addEventListener("input", () => {
  console.log("변경중");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;
  // input: 현재 input에 변경사항이 존재하느 ㄴ순간을 계속 인식해
  // 실시간으로 바로 반영가능
  // shift ctrl 등 입력값이 변하지않는다면 이밴트 발생 x
});
chgInput.addEventListener("change", () => {
  //change: input 변경이 일어나고
  //다른요소 클릭해서 포커스아웃하면 이벤트발생
  console.log("변경완ㄴ료");
});

//폼제출이벤트
//submit
const todos = document.querySelector(".todos");
const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 폼이 실제로 제출되자않음, 새로고치ㅣㅁ 방지
  const todoInput = document.querySelector('[name="todo"]'); //속성선택 대괄호
  console.log(todoInput.value); //input값은 value로 가져옴
  const todo = todoInput.value;

  const li = document.createElement("li");
  // li.textContent = todo;
  li.append(todo); //textcontent나 append나 같읒ㅁ
  todos.append(li);
  // todoInput.value = "";
});

// //빈문자열을 추가하고싶지않을때는
// if (todoInput.value.trim() !== "") {
//   const li = document.createElement("li");
//   li.append(todoInput);
//   todos.append(li);
// }
