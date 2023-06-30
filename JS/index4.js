console.log("hi");

// 함수선언문
// funtion 함수이름(매개변수){
//    함수내용
//  }
// 함수이름은 camelCase로

helloWorld1();

function helloWorld1() {
  console.log("hello world1");
}

helloWorld1();

function helloWorld2() {
  return "hello world2";
}

// return : 함수의 반환값, 함수 내부코드의 최종값
//
console.log(helloWorld2());
console.log(helloWorld1());

function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1, num2) {
  console.log("위에는 실행됨");
  return num1 + num2;
  console.log("리턴이후 문장을 쓰면 실행되지않음");
}

add(5, 10);
add(2, 3);

//함수 표현식(익명함수)
// helloWorld3(); 선언전에 부르면 오류남
const helloWorld3 = function () {
  console.log("hello world3");
};
helloWorld3();

//화살표

// console.log(helloWorld4());화살표 함수도 선언전에 부르면 오류남

const helloWorld4 = () => {
  return "hello world4";
};

console.log(helloWorld4());

// 매개변수가 있는 함수

function sayHello1(name) {
  return "안녕하세요 " + name + " 님";
}

console.log(sayHello1("와랑"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name} 님`);
}

sayHello2("안녕", "화랑");

let sayHello3 = function (text, name) {
  console.log(`${text}!! ${name} 익명함수`);
};

sayHello3("안녕", "화랑");

let sayHello4 = (text, name) => {
  console.log(`${text}!! ${name} 화살표`);
};
sayHello4("안녕", "화랑");

function multifuly(num1, num2) {
  return num1 * num2;
}

console.log(multifuly(3, 7));
console.log(multifuly(2, 2));

function square(num) {
  return num * num;
}

console.log(square(4));
console.log(square(11));
console.log(square(5));
