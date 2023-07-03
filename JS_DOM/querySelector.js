console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

//getElementById
console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

//id는 문서에 하나만 존재함

//클래스 이름으로 선택하기
//getElementsClassByName
console.log(document.getElementsByClassName("pink")); //배열형태로 출력
// 2에대한 요소출력
console.log(document.getElementsByClassName("pink")[1]);

//getElementsByTagName
console.log(document.getElementsByTagName("div")); //배열형태로 출력

//getElementsByName
console.log(document.getElementsByName("id"));

//querySelector 선택자로 선택
// css에서 사용했던 선택자를 이용해서 요소를 선택함
console.log(document.querySelector(".pink"));
console.log(document.querySelectorAll(".pink"));

//속성선택자 대괄호 []
console.log(document.querySelector('[name="id"]'));

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log(pinks[2]);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

for (let pink of pinks) {
  console.log("for of" + pink);
}
