document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observerOptions = {
        threshold: 0.2 // Memicu animasi saat 20% section terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas animasi dari Animate.css
                entry.target.classList.add("animate__animated", entry.target.dataset.animation);
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi dipicu
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});