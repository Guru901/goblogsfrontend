const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navBar = document.querySelector("#hidden-nav");
const cursor = document.querySelector("#cursor");

menuBtn.addEventListener("click", () => {
  openNav();
});

closeBtn.addEventListener("click", () => {
  closeNav();
});
const openNav = () => {
  if (window.innerWidth > 768) {
    gsap.to(navBar, {
      left: "70%",
      duration: 0.5,
      ease: "power1",
    });
  } else {
    gsap.to(navBar, {
      left: "00%",
      duration: 0.5,
      ease: "power1",
    });
  }
};

const closeNav = () => {
  gsap.to(navBar, {
    left: "100%",
    duration: 0.5,
    ease: "power1",
  });
};

const cursorAnim = () => {
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.pageX,
      y: e.pageY,
      ease: "expo",
    });
  });
};

cursorAnim();
