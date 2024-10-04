var swiper = new Swiper(".centered-slide-carousel-1", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 32,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3100,  // Set waktu otomatis geser ke 3 detik
    disableOnInteraction: false,  // Agar autoplay tetap berjalan meski ada interaksi
  },
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 32
    },
    1028: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    240: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  }
});

var swiper2 = new Swiper(".centered-slide-carousel-2", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3200,  // Set waktu otomatis geser ke 3 detik
    disableOnInteraction: false,  // Agar autoplay tetap berjalan meski ada interaksi
  },
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1028: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    240: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  }
});

var swiper3 = new Swiper(".centered-slide-carousel-3", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3300,  // Set waktu otomatis geser ke 3 detik
    disableOnInteraction: false,  // Agar autoplay tetap berjalan meski ada interaksi
  },
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1028: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    240: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  }
});

// navHeader scrool
window.onscroll = function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('drop-shadow-drop3');
  } else {
    navbar.classList.remove('drop-shadow-drop3');
  }
};