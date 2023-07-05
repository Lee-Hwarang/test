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

//600
