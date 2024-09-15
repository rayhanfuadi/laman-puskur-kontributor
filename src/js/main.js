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
           slidesPerView: 3,
           spaceBetween: 32
         },
         1028: {
           slidesPerView: 2,
           spaceBetween: 12
         },
         990: {
           slidesPerView: 1,
           spaceBetween: 0
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
           slidesPerView: 3,
           spaceBetween: 24
         },
         1028: {
           slidesPerView: 2,
           spaceBetween: 12
         },
         990: {
           slidesPerView: 1,
           spaceBetween: 0
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
           slidesPerView: 3,
           spaceBetween: 24
         },
         1028: {
           slidesPerView: 2,
           spaceBetween: 12
         },
         990: {
           slidesPerView: 1,
           spaceBetween: 0
         }
       }
      });


// // Hamburger
// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu');

// hamburger.addEventListener('click', function(){
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });

// // klik diluar hamburgernya
// window.addEventListener('click', function(e){
//     if(e.target != navMenu && e.target != hamburger){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// })