function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}

function openModal() {
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

var tl = gsap.timeline();

tl.from(".navbar img", {
  y: -20,
  duration: 0.5,
  delay: 0.25,
  opacity: 0,
});
// tl.from(".lefttoright",{
//     x:-200,
//     duration:0.5,
//     delay:0.25,
// })
tl.from(".bottomtotop div", {
  y: 200,
  duration: 1,
  stagger: 0.3,
  opacity: 0,
});
gsap.to(".fadeout", {
  y: -150,
  opacity: 0,
  scrollTrigger: {
    trigger: ".fadeout",
    scroller: "body",
    start: "bottom 60%",
    end: "bottom 30%",
    scrub: 1,
  },
});

tl.from(".textleftanimate", {
  opacity: 0,
  x: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".textleftanimate",
    scroller: "body",
    start: "top 95%",
    end: "top 50%",
    scrub: true,
  },
});
// btnanmation
var sec1btn = document.querySelector(".btn");
sec1btn.addEventListener("mouseover", function () {
  gsap.to(".btntext", {
    x: 70,
    delay: 0.1,
    duration: 0.3,
  });
});
sec1btn.addEventListener("mouseleave", function () {
  gsap.to(".btntext", {
    x: 0,
  });
});

gsap.from(".textrightanimate", {
  opacity: 0,
  x: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".textrightanimate",
    scroller: "body",
    start: "top 95%",
    end: "top 50%",
    scrub: true,
  },
});
gsap.from(".zoom", {
  opacity: 0,
  scale: -1.86,
  scrollTrigger: {
    trigger: ".zoom",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: true,
  },
});
gsap.from(".zoombottomtoup h4", {
  y: 300,
  scale: 2.5,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".zoombottomtoup",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".texttopanimate", {
  opacity: 0,
  y: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".texttopanimate",
    scroller: "body",
    start: "top 100%",
    end: "top 60%",
    scrub: true,
  },
});

gsap.from(".iconanimation", {
  scale: 0,
  duration: 1,
  scrollTrigger: ".iconanimation",
});
gsap.from(".moveleft h4", {
  opacity: 0,
  x: 200,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".moveleft",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
// project section text typing
const pjmainheading = document.querySelectorAll('.pjmainheading');

const pjheadingtext = gsap.timeline({
  scrollTrigger: {
    trigger: "#text1",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});

pjmainheading.forEach((text, index) => {
  const content = text.textContent;
  pjheadingtext.fromTo(
    text,
    { text: "" },
    {
      duration: content.length / 10,
      text: { value: content, newClass: "typed", delimiter: "" },
      
    },
    index * (content.length / 10 + 0.5)
  );
});

const pj1text = document.querySelectorAll('.pj1text');
const pj1div = gsap.timeline({
  scrollTrigger: {
    trigger: "#pj1div",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
pj1text.forEach((text, index) => {
  const content = text.textContent;
  pj1div.fromTo(
    text,
    { text: "" },
    {
      duration: content.length / 10,
      text: { value: content, newClass: "typed", delimiter: "" },
      
    },
    index * (content.length / 10 + 0.5)
  );
});

const pj2text = document.querySelectorAll('.pj2text');
const pj2div = gsap.timeline({
  scrollTrigger: {
    trigger: "#pj2div",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
pj2text.forEach((text, index) => {
  const content = text.textContent;
  pj2div.fromTo(
    text,
    { text: "" },
    {
      duration: content.length / 10,
      text: { value: content, newClass: "typed", delimiter: "" },
      
    },
    index * (content.length / 10 + 0.5)
  );
});
const pj3text = document.querySelectorAll('.pj3text');
const pj3div = gsap.timeline({
  scrollTrigger: {
    trigger: "#pj3div",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
pj3text.forEach((text, index) => {
  const content = text.textContent;
  pj3div.fromTo(
    text,
    { text: "" },
    {
      duration: content.length / 10,
      text: { value: content, newClass: "typed", delimiter: "" },
      
    },
    index * (content.length / 10 + 0.5)
  );
});

// const pj1container = document.querySelector("#pj1text");
// const pj1elements = pj1container.querySelectorAll("p, h4, h6");

// const pj1timeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: pj1container,
//         start: "top 90%",
//         end: "top 40%",
//         scrub: true,
//     },
// });

// pj1elements.forEach((element, index) => {
//     const content = element.textContent;
//     pj1timeline.fromTo(
//         element,
//         { text: "", opacity: 1 }, // Starting state: empty text and visible
//         {
//             duration: content.length / 10,
//             text: { value: content, newClass: "typed", delimiter: "" },
//             ease: "none",
//             onStart: () => {
//                 // Ensure the text element is visible when the animation starts
//                 element.style.opacity = 1;
//             }
//         },
//         index * (content.length / 10 + 0.5)
//     );
// });


gsap.from(".moveup1", {
  opacity: 0,
  y: 100,
  scrollTrigger:{
    trigger: ".moveup1",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".moveup2", {
  opacity: 0,
  y: 100,
  scrollTrigger:{
    trigger: ".moveup2",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".moveup3", {
  opacity: 0,
  y: 100,
  scrollTrigger:{
    trigger: ".moveup3",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".texttopanimate2", {
    opacity: 0,
    y: 90,
    duration: 2,
    scrollTrigger: {
      trigger: ".texttopanimate2",
      scroller: "body",
      start: "top 100%",
      end: "top 60%",
      scrub: true,
    },
  });
gsap.from(".pngopacity",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".pngopacity",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
  });
  gsap.from(".pnglefttoright",{
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".pnglefttoright",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
  })
  gsap.from(".pngrighttoleft",{
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".pngrighttoleft",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
  })

  gsap.from(".moveleft2", {
    opacity: 0,
    x: 300,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".moveleft2",
      scroller: "body",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
  });