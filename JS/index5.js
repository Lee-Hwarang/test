//js의 기본 객체, new로 생성함
/* 
String 
NuMber
Array
Date : 시간 날짜 /getMonth 월은 0부터 시작함 / getDay 0(일)~6(토)
Math : 
Object

*/

// date 객체를 이용해 오늘 요일으 ㄹ얻고
//swich-case문과 if문으로 오늘이 평일/주말인지 구별하자

let nowDay = new Date();

switch (nowDay.getDay()) {
  case 0:
    console.log(nowDay.getDay() + " 일요일, 주말입니다.");
    break;
  case 1:
    console.log(nowDay.getDay() + " 월요일, 평일입니다.");
    break;
  case 2:
    console.log(nowDay.getDay() + " 화요일, 평일입니다.");
    break;
  case 3:
    console.log(nowDay.getDay() + " 수요일, 평일입니다.");
    break;
  case 4:
    console.log(nowDay.getDay() + " 목요일, 평일입니다.");
    break;
  case 5:
    console.log(nowDay.getDay() + " 금요일, 평일입니다.");
    break;
  case 6:
    console.log(nowDay.getDay() + " 토요일, 주말입니다.");
    break;
}

if (nowDay.getDay() == 0 || nowDay.getDay() == 6) {
  console.log(nowDay.getDay() + "주말입니다.");
} else {
  console.log(nowDay.getDay() + "평일입니다.");
}

console.log(nowDay.getDay() === 0 || nowDay.getDay() === 6 ? "주말" : "평일");

// new Date(y m d h m s) 시분초 미설정시 00:00:00

//cell 올림 floor 내림 round 반올림

//난수생성 random number

// 0<= num < 1
console.log("난수생성" + Math.random());

//0 <= 10
console.log(Math.floor(Math.random() * 10));

//0.xxx ~ 9.xxx
console.log(Math.random());

// 0<= x <= 10
//0<= x <11
console.log(Math.floor(Math.random() * 11));

// 20<= x <= 22
//20부터 23미만
//0부터 3까지의 범위를 구하고 20을 더하면 됨
console.log(Math.floor(Math.random() * 3 + 20));

//object
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum)); //키만 배열로
console.log(Object.values(areaNum)); //값만 배열로
