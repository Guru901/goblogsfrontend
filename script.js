const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navBar = document.querySelector("#hidden-nav");

menuBtn.addEventListener("click", () => {
  openNav();
});

closeBtn.addEventListener("click", () => {
  closeNav();
});
const openNav = () => {
  gsap.to(navBar, {
    left: "70%",
    duration: 0.5,
    ease: "power1",
  });
};

const closeNav = () => {
  gsap.to(navBar, {
    left: "100%",
    duration: 0.5,
    ease: "power1",
  });
};
