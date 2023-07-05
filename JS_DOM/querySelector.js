console.log(document);
console.log(document.head);
console.log(document.title);
console.log("바디" + document.body);
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
console.log(pinks + "dddddd");
console.log(pinks[2]);

console.log("핑크스의 길이" + pinks.length);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

for (let pink of pinks) {
  console.log("for of" + pink);
}

let sum2 = 0;
for (i = 1; i < 11; i++) {
  sum2 = sum2 + i;
}
console.log(sum2);

// Hello world 세번찍기
// for(초기식; 조건식; 증감식;){
//     반복할문장;
// }

for (i = 0; i <= 2; i++) {
  console.log("hi" + i);
}
