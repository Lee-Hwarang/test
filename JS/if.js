// if(조건식){
//     조건식이 참일때 실행할 문장
// }

if (5 > 3) {
  console.log("얍");
}

// let num = Number(prompt("숫자를 입력해주세요"));
let num = 1;
// console.log(num + typeof num);

//if ~ else
// if(조건식){
//     참일때
// }else{
//     참이아닐때
// }

// if (num > 10) {
//   console.log(num + " 은 10보다 큽니다");
//   //   alert(num + " 은 10보다 큽니다");
// } else {
//   console.log(num + " 은 10보다 작습니다");
// }

// if (num > 10) {
//   console.log(num + " 은 10보다 큽니다");
//   //   alert(num + " 은 10보다 큽니다");
// } else if (num === 10) {
//   console.log(num + " 은 10과 같습니다");
// } else {
//   console.log(num + " 은 10보다 작습니다");
// }

// let score = prompt("성적을 입력해주세요");

// // 0부터 100까지 입력받음
// // 91~100 A
// // 81~90 B
// // 71~80 C
// // 61~70 D
// // 그 외 F

// if (score <= 100 && score >= 91) {
//   console.log("A학점입니다.");
// } else if (score >= 90) {
//   console.log("B학점입니다.");
// } else if (score >= 80) {
//   console.log("C학점입니다.");
// } else if (score >= 70) {
//   console.log("D학점입니다.");
// } else {
//   console.log("F학점입니다.");
// }

// let age = Number(prompt("나이를 입력해주세요"));

// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else if (age === 0 && age < 8) {
//   console.log("유아");
// } else {
//   console.log("음수입니다");
// }

//중첩 if문
let userId = "user";
let userPw = "1234!";

// function login() {
//   let inputId = prompt("id를 입력해주세요");
//   let inputPw = prompt("password를 입력해주세요");

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       alert("로그인성공");
//     } else {
//       alert("패스워드가 틀렷음");
//     }
//   } else {
//     alert("아이디 틀렷음");
//   }
// }

// login();

// switch ~ case문
// switch(값){
//     case 1:
//         값이 1이라면 실행할 문장
//         break;
//     case "abc":
//         값이 abc라면 실행할문장
//      default:
//        위의 값이 모두 일치하지않을때
//          break;
// }

let a = 4;

switch (a) {
  case 3:
    console.log("3입니다");
    break;
  case 4:
    console.log("4입니다");
    break;
  case "4":
    console.log("문자 4입니다");
    break;
  default:
    console.log("3도 4도 아니네요");
    break;
}

// let num0 = Number(prompt("숫자입력해라"));

// if (num0 % 2 === 0) {
//   console.log("짝수");
// } else {
//   console.log("홀수");
// }

// 삼항연산자
//  조건 ? (참일때)실행할 문장 : (거짓일때)실행할 문장

// let result = num0 % 2 === 1 ? "홀수" : "짝수";
// console.log(result);

//현재시간을 받아옴
//0~23숫자 반환 0이 자정 12가 정오
//now변수 안에 현재시간에 대한 숫자가 저장됨
//삼항연산자로 지금이 오전 .오후 인지 콘솔에 출력하기

// 오전 0~12
// 오후 12~24

let now = new Date().getHours();

console.log(now);

if (now >= 12) {
  console.log("오후");
} else {
  console.log("오전");
}

let result = now <= 12 ? "오전" : "오후";

console.log(result);
