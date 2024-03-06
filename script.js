var tl= gsap.timeline();

tl.from("nav img", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 1,
  stagger: 0.2,
});

tl.from(".nav-part2 h3", {
  y: -100,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
});

tl.from(".nav-part3", {
  y: -100,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
});
tl.from(".main h1", {
  y: 120,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
});

tl.to(".i1, .i4", {
  opacity: 1,
  scale: 1,
});

tl.to(".main h5", {
  y: -120,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
  opacity: 1
});