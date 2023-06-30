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

for (i = 0; i < 10000; i += 13) {
  if (i % 2 === 1) {
    console.log("13배수인데 홀수임" + i);
  }
}

for (i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

13;
26;
39;
