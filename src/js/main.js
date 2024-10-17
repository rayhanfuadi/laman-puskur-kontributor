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
      spaceBetween: 16
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    240: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  }
});

var swiper2 = new Swiper(".centered-slide-carousel-2", {
  centeredSlides: false,
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
      spaceBetween: 16
    },
    1028: {
      slidesPerView: 3,
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
      spaceBetween: 16
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    240: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  }
});


// Testimoni (Pagedone)
var swiper = new Swiper(".default-carousel", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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

//button masuk
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener("click", () => {
  console.log("masuk")
  window.location.href = "./login.html"
})

const registBtn = document.getElementById('registBtn');

registBtn.addEventListener("click", () => {
  window.location.href = "./regist.html"
})
