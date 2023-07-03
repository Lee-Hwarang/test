//문자열 관련메소드
let str1 = "   strawberry moon   ";

//인덱싱
console.log(str1[4]);
console.log(str1[3] + str1[15]);

//공백포함 길이
console.log(str1.length);

//공백제거 길이
let str2 = str1.trim();
console.log(str2);
console.log(str2.length);

//indexof 없는 문자는 -1을 반환

let date = "2023.07.03";
const dateArr = date.split(".");
console.log(dateArr);

//for of는 요소로 접근한다, 배열에서만 사용 가능
// for each는 익명함수가 매개변수로 들어간다
// 요소자체에 접근 , 인덱스에 접근, 배열자체

//filter find 요소를 찾아 return
//filter는 배열로 반환
//find 는 첫번째 요소를 값으로 반환
//map  연산결과를 새로운 배열로 반환

let arr1 = [1, 2, 3, 4, 5];

let arr2 = ["a", "b", "c", "d"];

arr2.unshift("고영");
arr2.unshift("쥐");
console.log(arr2);
arr2.shift();
console.log(arr2);

arr2[5] = "기린";
console.log(arr2);

//join 배열을 문자열로

//반복

let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log("of" + number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

//forEach메소드
//배열.forEach(function(요소, 인덱스, 배열){})
//배열.forEach((요소, 인덱스, 배열)=>{})

arr3.forEach(function (num, index, arr) {
  console.log("요소" + num);
  console.log("인덱스" + index);
  console.log("배열" + arr);
  console.log("###############3");
});

arr3.forEach((num, index, arr) => {
  console.log("화살표 요소" + num);
  console.log("화살표 인덱스" + index);
  console.log("화살표 배열" + arr);
  console.log("###############");
});

//map filter find

// 매개변수로 익명함수를 사용
// 배열자체를 변경시켜주지 않아 새로운 변수에 저장해서 사용

// [].map(function(value,index,arr){})
//연산결과를 새로운 배열로 반환
let arr4 = [1, 2, 3, 4, 5];
arr4.map(function (num, i, arr) {
  return num * 2;
});

console.log(arr4);

const multiArr = arr4.map(function (el) {
  return el * 2;
});

console.log(multiArr);

//filter() 찾아 배열로 반환
arr2 = ["aaaaaaa", "b222222", "c333", "d"];
arr2.filter(function (el) {
  return el.lenth >= 6;
});

console.log(arr2);

let six = arr2.filter(function (el) {
  return el.length >= 6;
});

console.log(six);
//find 첫번째요소를 값으로 반환

let findResult1 = multiArr.find((el) => {
  return el > 7;
});

//화살표 함수엔 중괄호 안써도 되고 안쓰면 리턴없이도 사용가능
let findResult2 = multiArr.find((el) => el > 7);

let arrow = arr2.filter((el) => el.length >= 6);

// for in 값이 아니라 오브젝트의 키가 출력됨
// 값으로 접근하는 법
// 점으로 1.arr.key
// 대괄호로 2. arr["key"]
// Seoul:"02"
// (키) : "(값)"
