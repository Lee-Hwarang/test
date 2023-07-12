let tl1 = gsap.timeline();

tl1
  .to(".cloud1", {
    scale: 1.5,
    opacicy: 0,
    xPercent: 200,
  })
  .to(".cloud2", {
    scale: 1.5,
    opacicy: 0,
    xPercent: -100,
  })
  .to(".sun", {
    scale: 1.5,
    opacicy: 0,
    xPercent: -600,
    YPercent: 300,
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".section1",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  markers: true,
  pin: true,
  end: "+=5000",
});
