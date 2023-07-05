// const div1 = document.getElementById("div1");

// //글자만
// console.log(div1.textContent);
// console.log(div1.innerText);

// //태그전체
// console.log(div1.innerHTML);

// //텍스트 변경
// div1.innerText = "<b>innerText</b>로 바꾼 div 태그임 &hearts; ";
// div1.innerHTML = "  <b>innerText</b>로 바꾼 div 태그임 &hearts;  ";
// console.log(div1.innerText);
// div1.textContent = "    <b>innerText</b>로 바꾼 div 태그임 &hearts;  ";
// console.log(div1.textContent);

// const naver = document.getElementById("naver");
// const ham = document.querySelector("#ham");

// console.log(naver);
// console.log(ham);

// naver.setAttribute("href", "https://www.google.com/");
// naver.innerText = "구글";

// console.log(ham.getAttribute("src"));
// console.log(ham.src);
// // ㅇㄴㄴ;
// console.log(ham.alt);
// ham.alt = "햄사진";

// // css 지정
// const h1 = document.querySelector("h1");
// const list = document.querySelector("li");
// console.log(h1);
// console.log(list);

// //스타일 속성 사용
// // for (let li of list) {
// //   console.log(li);
// //   li.style.backgroundColor = "orange";
// //   li.style.color = "#fff";
// //   li.style.fontSize = "1.2rem";
// // }

// //클래스 리스트 사용
// console.log(h1.classList);

// h1.classList.add("add-h1");
// console.log(h1.classList);
// // h1.classList.remove("add-h1");
// // console.log(h1.classList.contains("add-h1"));
// // h1.classList.toggle("add-h1");
// // console.log(h1.classList.contains("add-h1"));

// // if (h1.classList.contains("add-h1")) {
// //   h1.classList.remove("add-h1");
// // } else {
// //   h1.classList.add("add-h1");
// // }

// // for (let li of list) {
// //   li.classList.add("friends");
// //   console.log(li);
// //   console.log(h1.classList.contains("friends"));
// // }

// // list.classList.add(".friends");

// // 요소생성추가삭제

// const friends = document.getElementById("friends");
// const tigger = document.getElementById("tigger");
// console.log("friends");
// console.log("tigger");

// //자식노드 접근
// console.log("자식노드접근#################");
// console.log(friends.children);
// console.log(friends.children[0]);

// // 부모노드에 접근
// console.log("부모노드에 접근$$$$$$$$$$$$");
// console.log(tigger.parentNode);

// //형제노드 접근
// console.log("************형제노드접근");
// console.log(tigger.previousElementSibling);
// console.log(tigger.nextElementSibling.nextElementSibling);

// //요소생성
// const container = document.querySelector("container");
// console.log("container");

// const p = document.createElement("p");
// p.innerText = "추가p";
// p.style.fontWeight = "bold";
// p.style.backgroundColor = "yellow";

// console.log(container);
// console.log(p);

// //요소추가

// // container.append(p);
// const p2 = document.createElement("p");
// p2.innerText = "p2";
// const p3 = document.createElement("p");
// p3.innerText = "p3";

// p2.classList.add("p-2");
// p3.classList.add("p-3");

// container.prepend(p2);

// const h2 = document.createElement("h2");
// h2.innerText("추가된 h2");
// h1.before(h2);

// const h3 = document.createElement("h3");
// h3.innerText = "33333333333333";
// h1.after(h3);

// //appendChild사용
// const p4 = document.createElement("p");
// p4.innerText = "p4";
// p4.classList.add("p-2");

// 4-1. 요소 생성
const container = document.querySelector(".container");

const img = document.createElement("img");
const span2 = document.createElement("span");
console.log(span2);
img.setAttribute("src", "../img/ham.jpg");
img.setAttribute("alt", "ham");
container.append(img);

container.append(span2);
console.log(span2.innerText);

console.log(container);
span2.innerText = "안녕난햄";

// const p = document.createElement("p");
// p.innerText = "추가한 p";
// p.style.fontWeight = "bold";
// p.style.backgroundColor = "red";

// console.log(p);

// // 4-2. 요소 추가 append prepend before after
// container.append(p);

// const p2 = document.createElement("p");
// p2.innerText = "p2";
// const p3 = document.createElement("p");
// p3.innerText = "p3";
// p2.classList.add("p-2");
// p3.classList.add("p-3");
// container.prepend(p2);
// container.append(p3);

// const h2 = document.createElement("h2");
// h2.innerText = "추가된 h2";
// h1.before(h2);

// const h3 = document.createElement("h3");
// h3.innerText = "h33333";
// h1.after(h3);

// // appendChild 사용
// const p4 = document.createElement("p");
// p4.innerText = "p4";
// p4.classList.add("p-2");
// const p5 = document.createElement("p");
// p5.innerText = "p5";
// p5.classList.add("p-3");

// // container.append(p4, p5, "안녕하세요");
// // container.appendChild(p4, p5);

// 실습!
const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

span.innerHTML = '안녕~~ 나는 <b style="color:pink;">피글렛</b>이야!! &hearts;';
img.setAttribute("src", "./img/piglet.png");
img.alt = "피글렛!";

div.append(img, span);
container.append(div);

/* 4-3. 요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");
// const friends = document.getElementById("friends");
// console.log(firstLi);

// firstLi.remove();
friends.removeChild(firstLi);
