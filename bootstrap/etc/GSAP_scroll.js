console.log(document.querySelector(".box1"));

gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "100% 50%",
    scrub: 1,
    markers: true,
  },
  y: 800,
  opacity: 0,
});

gsap.from(".box2", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top top",
    end: "100% 50%",
    scrub: 1,
    markers: true,
  },
  y: 800,
  opacity: 0,
});

console.log("?????????????");

// time라인과ㅏ함께
const tl = gsap.timeline();
tl.to(
  ".circle",
  {
    scrollTrigger: {
      trigger: "section", //스크롤 기준점
      animation: tl, //타임라인 이름
      start: "top top",
      end: "bottom 50%",
    },
  }.to("circle2", {})
);

tl.to(".circle", {
  scale: 2,
  opacity: 0,
}).to(".circle2", {
  scale: 2,
  opacity: 0,
});
