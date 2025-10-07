        // CAROUSEL DES SUPER-HÉROS - Style CodePen
        const carousel = document.querySelector('.carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        const itemWidth = items[0].offsetWidth + 30; // 30px pour les marges

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }

        function nextSlide() {
            const maxIndex = items.length - 1;
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // Retour au début
            }
            updateCarousel();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = items.length - 1; // Aller à la fin
            }
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Défilement automatique
        setInterval(nextSlide, 4000);

        // Adaptation au redimensionnement
        window.addEventListener('resize', () => {
            itemWidth = items[0].offsetWidth + 30;
            updateCarousel();
        });