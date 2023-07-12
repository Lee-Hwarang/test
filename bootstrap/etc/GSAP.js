gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPersent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3,
  yoyo: true,
  //   ease: "linear",
  //   ease: "bounce.inOut",
  ease: "power1.inOut",
});

const staggerAll = document.querySelectorAll(".stagger-container");
console.log(staggerAll);

gsap.from(staggerAll, {
  // ease: "elastic",
  duration: 3,
  scale: 0.5,
  repeat: 3,
  //요소가 여러개일때 애니메이션이 순서대로 걸림
  stagger: 0.5,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

// timeline 사용
// 연속적인 애니메이션을 만들기 위해서 사용

let tl = gsap.timeline();

// console.log(tl);

// tl.to(".red", {
//   x: 400,
//   duration: 2,
// });

// tl.to("orange", {
//   x: 500,
//   duration: 2,
// });

// tl.to("blue", {
//   x: 500,
//   duration: 2,
// });

tl.to(".red", {
  x: 400,
  duration: 2,
})
  .to(
    ".orange",
    {
      x: 500,
      duration: 3,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: 600,
      duration: 4,
    },
    "+=1"
  );

/* to/from 의 세번째 매개변수

    - {숫자} : 전체 타임라인에 대해 {숫자}초 뒤에 시작한다는 의미
    - < 이전 움직임과 동시시작
    - +={숫자} 마지막에 끝난 움직임보다 {숫자}초 뒤에 시작한다는 의미 

  */
