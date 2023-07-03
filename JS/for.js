// for
//(변수초기화; 조건식; 증감){
// 반복코드
// }

//  i++;
//  i+=1;
//  i=i+1;

for (let i = 0; i < 10; i = i + 1) {
  console.log(i + 1 + "안녕 ");
}

for (let i = 0; i < 10; i += 1) {
  console.log(i + 1 + "안녕! ");
}

for (let i = 0; i < 10; i++) {
  console.log(i + 1 + "안녕~ ");
}

for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

// 1~5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지 더하는 프로그램
let n = 10; //55
let sum = 0;

for (let i = 1; i < n; i++) {
  sum = sum + i;
  //   sum += i;
}

console.log(sum);

// i = 1 -> sum = 0+1 -> sum =1
// i = 2 -> sum = 1+2 -> sum =3
// i = 3 -> sum = 3+3 -> sum =6

let fruits = ["사과", "망고", "수박", "바나나"];

// console.log(fruits[0]부터 끝까지)

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//배열에 들어가있는 Number데이터 합 구하기

let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
  console.log(numSum);
}

console.log("최종합은" + numSum);

for (i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (i = 0; i < 21; i = i + 2) {
  console.log(i);
}

// for (i = 0; i < 10000; i += 13) {
//   if (i % 2 === 1) {
//     console.log("13배수인데 홀수임" + i);
//   }
// }

// for (i = 0; i < 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

//이중포문으로 구구단 만들기

/*  2*1 = 1
    2*2 = 4
    2*3 = 6
    2*4 = 7

    ''''

    9*1 =9
    9*2 =18
    9*3 =17

*/

for (let i = 2; i < 10; i++) {
  console.log(`${i}단`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}X${j}=${i * j}`);
  }
}

let n1 = 1; //초기화 작업
// while(조건){
//   조건이 참일때 실행할 문장
// }

while (n1 <= 5) {
  console.log(n1);
  n1++;
}

let n2 = 10;

// 1부터 10까지의 짝수
let n4 = 1;

while (n4 < 11) {
  if (n4 % 2 == 0) {
    console.log(n4 + "머임");
  }
  n4++;
}

//confirm 에서 확인을 누르면 true가 반환되어
//while문을 진행하고
//취소를 누르면 false를 반환하여
//while문이 중단됨
// let n5 = 0;
// while (confirm("계속진행")) {
//   n5++;
//   alert(n5 + "번째 alert");
// }

//continue 1~10홀수 합 구하기
//continue 현재반복을 멈추고 다음 반복으로 넘어감
let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    continue;
  }
  sum2 = sum2 + i;
  console.log("1~10홀수 합 구하기" + sum2);
}

//0~100중 2또는 5의배수 총합 구하기

let sum3 = 0;
for (let i = 2; i < 101; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum3 = sum3 + i;
    console.log("2또는 5의배수" + i);
  }
}
console.log("2또는 5의배수 총합" + sum3);
