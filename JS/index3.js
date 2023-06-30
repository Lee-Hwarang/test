console.log("hi");
// var
//     - 재선언 가능
//     - 예기치못한 값을 반환할수잇음
// let
//     - 재선언 불가, 재할당 가능
// const
//     - 재선언 불가, 재할당 불가
//     - 선언과 동시에 초기화

var name = "홍길동";
console.log(name);

var name = "나비";
console.log(name);

const b = 1;
// b = 12; const 재할당 불가

let q = 10;

q - 5;
console.log(q); //10 재할당을 하지않았음

q = q - 5;
console.log(q); //5 재할당을 함

// 산술연산자 + - * /
// 대입연산자 =
// 비교연산자 == === != !== < > <= >=
// 논리연산자 ! && ||

console.log(1 != 1);
console.log(1 != "1"); //이거 머지,,,
console.log("" == "0");
console.log("" == 0);
console.log("0" == false);
console.log("0" === false);
console.log(undefined == null);

console.log(!true);
console.log(!!true);
console.log(true || true); //ture만나면 종료
console.log(true && false); //false만나면 종료
