// ===================================
// 1. Navbar Toggle & Menu (MOBILE)
// ===================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
// Pastikan elemen icon di navbar menggunakan ion-icon
const icon = menuBtn ? menuBtn.querySelector("ion-icon") : null;

if (menuBtn && menu && icon) {
    // Toggle Menu
    menuBtn.addEventListener("click", () => {
        if (menu.classList.contains("translate-x-full")) {
            // Buka Menu
            menu.classList.remove("translate-x-full");
            icon.setAttribute("name", "close-outline");
        } else {
            // Tutup Menu
            menu.classList.add("translate-x-full");
            icon.setAttribute("name", "menu-outline");
        }
    });
}

// Global function untuk menutup menu (dipanggil dari a href onclick)
function closeMenu() {
    if (menu && icon) {
        menu.classList.add("translate-x-full");
        icon.setAttribute("name", "menu-outline");
    }
}

// ===================================
// 2. Smooth Scrolling (LENIS)
// ===================================
// Catatan: Pastikan Lenis diimpor di HTML (Sudah ada di kode Anda)

// const lenis = new Lenis();
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// ===================================
// 3. Efek Scroll Navbar & Active Link
// ===================================

const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link"); 

window.addEventListener("scroll", () => {
    // A. Efek Scroll Navbar
    if (window.scrollY > 50) {
        // SAAT DI-SCROLL: Ubah ke Hijau Transparan (#27AE60 dengan opacity 90%) + Shadow
        navbar.classList.add("bg-[#27AE60]/90", "shadow-xl");
        navbar.classList.remove("bg-transparent", "border-white/10"); // Hapus transparan & garis border
    } else {
        // SAAT DI ATAS (TOP): Kembali Transparan
        navbar.classList.remove("bg-[#27AE60]/90", "shadow-xl");
        navbar.classList.add("bg-transparent", "border-white/10"); // Tambah border tipis supaya rapi
    }

    // B. Active Link Highlighting
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // Offset disesuaikan
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("text-yellow-300", "font-bold");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-yellow-300", "font-bold");
        }
    });
});

// ===================================
// 4. Scroll Reveal
// ===================================

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0, // Ubah null ke 0 agar transisi opacity bekerja
    easing: 'ease-in',
    reset: true
};

var slideDown = {
    distance: '200%',
    origin: 'top',
    opacity: 0, // Ubah null ke 0
    reset: true
};

var slideRight = {
    distance: '50%',
    easing: 'ease-in',
    origin: 'right',
    opacity: 0, // Ubah null ke 0
    interval: 600,
    reset: true
};

var scale = {
    scale: 0.85,
    opacity: 0,
    reset: true
}

// Penerapan ScrollReveal
ScrollReveal().reveal(' .about-content', slideUp);
ScrollReveal().reveal('.about', slideDown);
ScrollReveal().reveal('.text-left', slideRight); // Untuk blok Visi Misi
ScrollReveal().reveal('.about-image', { delay: 300, origin: 'left', distance: '50px', opacity: 0 }); // Tambahan untuk gambar
ScrollReveal().reveal('.program', scale); // Untuk judul Program
ScrollReveal().reveal('.program1', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.program2', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.program3', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.program4', { delay: 400, origin: 'top' });
ScrollReveal().reveal('.program-card', { 
    interval: 200,    // Delay antar kartu
    origin: 'bottom', // Muncul dari bawah
    distance: '50px',
    scale: 0.9,       // Sedikit efek zoom in
    opacity: 0,
    reset: true
});


// ===================================
// 5. Carousel (FASILITAS)
// ===================================

const slider = document.querySelector('.slider');
// Pastikan menggunakan 'document.querySelector' karena hanya satu slider
const sliderContainer = document.querySelector('#fasilitas'); 

function activate(e) {
    if (e.target.matches('.next') || e.target.matches('.prev')) {
        const items = slider.querySelectorAll('.item');
        if (e.target.matches('.next')) {
            slider.append(items[0]);
        }
        if (e.target.matches('.prev')) {
            slider.prepend(items[items.length - 1]);
        }
    }
}

// Tambahkan event listener ke container 'fasilitas' atau 'document'
// Menggunakan 'document' seperti kode asli Anda.
document.addEventListener('click', activate, false);