// Menu toggle pour mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

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

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const language = document.getElementById('language').value;
    const message = document.getElementById('message').value;
    
    alert(`Merci ${name} ! Votre message a été envoyé. Nous vous contacterons bientôt à ${email} concernant nos cours de ${language}.`);
    contactForm.reset();
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

document.querySelectorAll('.about-content, .language-card, .method-card').forEach(el => {
    observer.observe(el);
});

// Carousel 3D Immersif - Version simplifiée sans loader
class ImmersiveCarousel3D {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.slideInfos = document.querySelectorAll('.slide-info');
        this.slideBgs = document.querySelectorAll('.slide__bg');
        this.prevBtn = document.querySelector('.slider--btn__prev');
        this.nextBtn = document.querySelector('.slider--btn__next');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        // Initialiser l'état des slides
        this.updateSlides();
        
        // Événements des boutons
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));
        
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });
        
        // Auto-play
        this.startAutoPlay();
    }
    
    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
        this.updateSlides();
    }
    
    updateSlides() {
        const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        const nextIndex = (this.currentIndex + 1) % this.totalSlides;
        
        // Réinitialiser tous les attributs
        this.slides.forEach(slide => {
            slide.removeAttribute('data-current');
            slide.removeAttribute('data-previous');
            slide.removeAttribute('data-next');
        });
        
        this.slideInfos.forEach(info => {
            info.removeAttribute('data-current');
            info.removeAttribute('data-previous');
            info.removeAttribute('data-next');
        });
        
        this.slideBgs.forEach(bg => {
            bg.removeAttribute('data-current');
            bg.removeAttribute('data-previous');
            bg.removeAttribute('data-next');
        });
        
        // Appliquer les nouveaux attributs
        this.slides[this.currentIndex].setAttribute('data-current', '');
        this.slides[prevIndex].setAttribute('data-previous', '');
        this.slides[nextIndex].setAttribute('data-next', '');
        
        this.slideInfos[this.currentIndex].setAttribute('data-current', '');
        this.slideInfos[prevIndex].setAttribute('data-previous', '');
        this.slideInfos[nextIndex].setAttribute('data-next', '');
        
        this.slideBgs[this.currentIndex].setAttribute('data-current', '');
        this.slideBgs[prevIndex].setAttribute('data-previous', '');
        this.slideBgs[nextIndex].setAttribute('data-next', '');
    }
    
    startAutoPlay() {
        setInterval(() => {
            this.navigate(1);
        }, 5000);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    new ImmersiveCarousel3D();
});