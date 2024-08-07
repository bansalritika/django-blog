document.addEventListener('DOMContentLoaded', function() {
    const spaceMenImage = document.querySelector('.space-men-image');
    const maxTranslateY = window.innerHeight / 2; // Limit the downward translation
    const maxRotateDeg = 180; // Limit the rotation to 180 degrees

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (spaceMenImage) {
            // Apply the transform based on scroll
            const translateY = Math.min(scrollPosition * 0.1, maxTranslateY);
            const rotateDeg = Math.min(scrollPosition * 0.05, maxRotateDeg);

            spaceMenImage.style.transform = `translateX(-50%) translateY(${translateY}px) rotate(${rotateDeg}deg)`;

            // Add or remove the 'paused' class based on scroll position
            if (scrollPosition > 0) {
                spaceMenImage.classList.add('paused');
            } else {
                spaceMenImage.classList.remove('paused');
            }
        }
    });
});

