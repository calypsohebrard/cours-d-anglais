// CAROUSEL DES SUPER-HÉROS - Version corrigée
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.slider--btn__prev');
    const nextBtn = document.querySelector('.slider--btn__next');
    const slides = document.querySelectorAll('.slide');
    const slideInfos = document.querySelectorAll('.slide-info');
    const slideBgs = document.querySelectorAll('.slide__bg');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        // Retirer tous les attributs data
        slides.forEach(slide => {
            slide.removeAttribute('data-current');
            slide.removeAttribute('data-next');
            slide.removeAttribute('data-previous');
        });
        
        slideInfos.forEach(info => {
            info.removeAttribute('data-current');
            info.removeAttribute('data-next');
            info.removeAttribute('data-previous');
        });
        
        slideBgs.forEach(bg => {
            bg.removeAttribute('data-current');
            bg.removeAttribute('data-next');
            bg.removeAttribute('data-previous');
        });

        // Définir les nouveaux attributs data
        slides[currentSlide].setAttribute('data-current', '');
        slideInfos[currentSlide].setAttribute('data-current', '');
        slideBgs[currentSlide].setAttribute('data-current', '');

        const nextIndex = (currentSlide + 1) % totalSlides;
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;

        slides[nextIndex].setAttribute('data-next', '');
        slideInfos[nextIndex].setAttribute('data-next', '');
        slideBgs[nextIndex].setAttribute('data-next', '');

        slides[prevIndex].setAttribute('data-previous', '');
        slideInfos[prevIndex].setAttribute('data-previous', '');
        slideBgs[prevIndex].setAttribute('data-previous', '');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Événements des boutons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Défilement automatique
    let autoSlide = setInterval(nextSlide, 4000);

    // Arrêter le défilement automatique au survol
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });
        
        slider.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 4000);
        });
    }

    // Touches clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialisation
    updateCarousel();

    // Adaptation au redimensionnement
    window.addEventListener('resize', updateCarousel);
});

// Menu toggle pour mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Changement de style du header au scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});





// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 1s ease forwards`;
        }
    });
}, observerOptions);

// Observer les sections pour l'animation
document.querySelectorAll('.about-content, .language-card, .method-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});