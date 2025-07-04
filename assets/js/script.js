// swiper

var swiper = new Swiper(".review_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// menu icon

let menu = document.querySelector(".menu_icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open_menu");
};

// close navbar

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open_menu");
};

// scroll reveal

const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home_text", { origin: "left" });
animate.reveal(".home_img", { origin: "bottom" });
animate.reveal(".ser_box,.product_box, .team_box,.book_data", {
  intervel: 100,
});
