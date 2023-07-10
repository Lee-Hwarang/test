// console.log(window);
// console.log($(window));
// console.log($(window));
// console.log($(document));

//마우스이벤트
//클ㄹ릭
//on은 addEventListener와 같은 의미

// $(".p-msg").on("click", function () {
//   //   $(".p-msg").css("color", "blue");
//   $(this).css("color", "blue");
// });

// $(".p-msg").click("click", function () {
//   //   $(".p-msg").css("color", "blue");
//   $(".p-msg").css("color", "blue");
// });

$(".num").click("click", function () {
  //   $(".p-msg").css("color", "blue");
  $(this).css("color", "tomato");
});

//js

const nums = document.querySelectorAll(".num");

console.log(document.querySelector(".num"));
// [one, two, three, four]
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    nums[i].computedStyleMap.color = "tomato";
  });
}

// $(".numbers").on("mouseover", () => {
//   $(".numbers").css("background-color", "blue");
//   $(".numbers").append("<div>마우스ㅡ오버로 추가된자식</div>");
// });

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "blue");
//   $(".numbers").append("<div>마우스ㅡ오버로 추가된자식</div>");
// });

//마우스 올렸을때 , 떼었을때 정의
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//스크롤
window.addEventListener("scroll", () => {
  console.log("스크롤");
});

$(window).scroll(() => {
  console.group("스크롤 제이쿼리");
});

//키보드
$(".input-key").keydown(function (e) {
  console.log(e);
  console.log(e.upcode);
  if (e.code === "ArrowUP") {
    console.log("");
  }
});

$("#form").submit(function (e) {
  e.preventDefault();
  const todo = $("#todo").val();
  console.log(todo);
  console.log("Dd");

  $(".todos").append(`<li>${todo}</li>`);
  $("#todo").val("");
});
