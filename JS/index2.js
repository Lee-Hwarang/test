console.log("안녕");
// alert("얼럿 녕안");
// confirm("확인 안녕");
// prompt("프롬프트 녕녕안");

// 1.문자열 , string
// q변수선언
let myName = "이화랑";
let myCity = "seoul";

console.log(myName);
// 내이름은 이화랑입니다 사는곳은 서울입니다
console.log("내이름은", myName, "입니다 사는곳은", myCity, "입니다");
console.log("내이름은" + myName + "입니다 사는곳은" + myCity + "입니다");

//백틱문자
console.log(`내이름은${myName}입니다 사는곳은${myCity}입니다`);

let myInfo = "내이름은" + myName + "입니다 사는곳은" + myCity + "입니다";
let myInfo2 = `내이름은${myName}입니다 사는곳은${myCity}입니다`;

console.log("info1" + myInfo);
console.log("info2" + myInfo2);

//2.number
// 연산가능
let num1 = 100;
let num2 = 3.14;

console.log(num1 + num2);
// 숫자와 문자와의 연산은 NaN (Not a Number)

//3. Boolean
let checked = true;
let isShow = false;
// let checked =true;

console.log(checked, isShow);

// 4. undefined

let undef;

console.log(undef);

let empty = null;

console.log(empty);

// 5. 배열

let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");

console.log(fruits);
console.log(fruits2);
console.log(fruits2[0]);

//2차원 배열 (배열속 배열)
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["겨", "녀", "뎌"],
];

console.log(kr);
console.log(kr[0][1]);
console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0],
  letters[1][3],
  letters[0][1],
  letters[0][3],
  letters[2][2]
);

//6. object는 키: "값" 형태로 저장하고 키의 이름으로 접근
let cat = {
  name: "나비",
  age: "1",
  isCute: true,
  mew: function () {
    return "냥";
  },
};

//점 표기법
console.log(cat);
console.log(cat.name);
console.log(cat.isCute);
console.log(cat.mew());

//대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);
console.log(cat["mew"]);

cat.name = "딸랑이";
console.log(cat);

cat["gender"] = "F";
console.log(cat);

cat["parents"] = ["mon", "dad"];
console.log(cat.parents[0]);

let me = {
  name: "화랑",
  age: "25",
  isSleepy: true,
  speech: "hi~ ",
};

console.log(me);

console.log("typeof----------------------------");

let und;
console.log(typeof "문자");
console.log(typeof 1);
console.log(typeof ture);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});

// 형변환
// 문자 -> 숫자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1.toString());

// 숫자 -> 문자
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = "3.14";

console.log(typeof Number(n1));
console.log(typeof Number(n2));
console.log(typeof Number(n3));
console.log(typeof Number(n4));
console.log(parseInt(n4));
console.log(n4);

// let likeNum = prompt("가장좋아하는숫자는?");
// likeNum = Number(likeNum);
// console.log("likenum의 타입은?" + typeof likeNum);
// console.log(likeNum + 10);

console.log(typeof Number(n4));

let mathScore = prompt("수학점수를 입력하세요");
let engScore = prompt("영어점수를 입력하세요");

mathScore = Number(mathScore);
engScore = Number(engScore);

let avg = (mathScore + engScore) / 2;
console.log(avg);

let number = 123;
let string = "123";
let object = null;

console.log(typeof number + " isn't " + typeof string + " date type.");
console.log(
  "typeof를 boolean이나 null에 사용하면," + object + "결과를 얻을 수 있다"
);
