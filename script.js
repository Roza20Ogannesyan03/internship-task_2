const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    //draggable: true,
    //hide: true,
  },
});

const swiperServices = new Swiper(".swiper-services", {
  navigation: {
    nextEl: ".swiper-button-next__services",
    prevEl: ".swiper-button-prev__services",
  },
  //slidesPerView: 1,
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__services",
    //draggable: true,
    //hide: true,
  },
});

const swiperButtons = new Swiper(".products__buttons", {
  scroll: true,
});
const swiperProducts = new Swiper(".swiper-products", {
  navigation: {
    nextEl: ".swiper-button-next__products",
    prevEl: ".swiper-button-prev__products",
  },
  //slidesPerView: 1,
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__products",
    draggable: true,
    //hide: true,
  },
});
const swiperBlog = new Swiper(".swiper-blog", {
  navigation: {
    nextEl: ".swiper-button-next__blog",
    prevEl: ".swiper-button-prev__blog",
  },
  //slidesPerView: 1,
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});