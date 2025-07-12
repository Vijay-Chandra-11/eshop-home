
// Carousel functionality
const carouselInner = document.getElementById('carousel-inner');
const slides = carouselInner ? carouselInner.children : [];
let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3500);
}

if (carouselInner) {
    showSlide(0);
    startCarousel();
    carouselInner.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carouselInner.addEventListener('mouseleave', startCarousel);
}

// Scroll-to-top button functionality
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
        scrollBtn.classList.remove('hidden');
    } else {
        scrollBtn.classList.remove('show');
        scrollBtn.classList.add('hidden');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Newsletter form (footer) - prevent reload
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
        this.reset();
    });
}
