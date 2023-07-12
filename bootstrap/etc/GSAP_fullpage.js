const slide = gsap.timeline();

slide
  .from(".red", {
    xPercent: -100,
  })
  .from("blue", {
    yPercent: 100,
  })
  .from("orange", {
    xPercent: 100,
  });

ScrollTrigger.create({
  animation: slide,
  trigger: "main",
  makers: true,
  start: "top top",
  pin: true,
  scrub: 2,
  end: "+=4000", //스크롤 길이설정
});
