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
      spaceBetween: 8
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 8
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
      spaceBetween: 8
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 8
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
      spaceBetween: 8
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 8
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
window.onscroll = () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('drop-shadow-drop3');
  } else {
    navbar.classList.remove('drop-shadow-drop3');
  }
};

// //button masuk
// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener("click", () => {
//   window.location.href = "./login.html"
// })


function openModalLogin() {
  const modal = document.getElementById('my_modal_2');
  const modalContent = document.getElementById('modalContentLogin');
  const firstContent = document.getElementById('firstContentLogin');
  const usernameInput = document.getElementById("fieldActive");


  modal.showModal();
  if (usernameInput) {
    usernameInput.focus();
  }

  firstContent.scrollIntoView({ behavior: 'smooth', block: "start" });
}

function openModalRegist() {
  const modal = document.getElementById('my_modal_3');
  const modalContent = document.getElementById('modalContentRegist');
  const firstContent = document.getElementById('firstContentRegist');
  const usernameInput = document.getElementById("fieldActive");

  // Buka modal
  modal.showModal();
  if (usernameInput) {
    usernameInput.focus();
  }

  firstContent.scrollIntoView({ behavior: 'smooth', block: "start" });
}

function openModalForget() {
  const modal = document.getElementById('my_modal_4');
  const modalContent = document.getElementById('modalContentForget');
  const firstContent = document.getElementById('firstContentForget');
  const usernameInput = document.getElementById("fieldActive");

  // Buka modal
  modal.showModal();
  if (usernameInput) {
    usernameInput.focus();
  }

  firstContent.scrollIntoView({ behavior: 'smooth', block: "start" });
}
