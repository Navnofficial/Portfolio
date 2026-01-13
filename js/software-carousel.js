// Software Carousel Drag-to-Scroll Functionality
(function () {
    const carousel = document.getElementById('softwareCarousel');
    const track = document.getElementById('softwareTrack');

    if (!carousel || !track) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let animationId;
    let isAutoScrolling = true;

    // Auto-scroll functionality
    function autoScroll() {
        if (isAutoScrolling && !isDown) {
            const currentTransform = getComputedStyle(track).transform;
            let currentX = 0;

            if (currentTransform !== 'none') {
                const matrix = currentTransform.match(/matrix.*\((.+)\)/)[1].split(', ');
                currentX = parseFloat(matrix[4]);
            }

            // Reset when reaching halfway point
            const trackWidth = track.scrollWidth / 2;
            if (Math.abs(currentX) >= trackWidth) {
                track.style.transform = 'translateX(0)';
            }
        }

        animationId = requestAnimationFrame(autoScroll);
    }

    // Start auto-scroll
    autoScroll();

    // Mouse/Touch drag functionality
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        isAutoScrolling = false;
        carousel.style.cursor = 'grabbing';
        track.style.animationPlayState = 'paused';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
        // Resume auto-scroll after 2 seconds
        setTimeout(() => {
            isAutoScrolling = true;
            track.style.animationPlayState = 'running';
        }, 2000);
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
        // Resume auto-scroll after 2 seconds
        setTimeout(() => {
            isAutoScrolling = true;
            track.style.animationPlayState = 'running';
        }, 2000);
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        isDown = true;
        isAutoScrolling = false;
        track.style.animationPlayState = 'paused';
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchend', () => {
        isDown = false;
        setTimeout(() => {
            isAutoScrolling = true;
            track.style.animationPlayState = 'running';
        }, 2000);
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Set cursor style
    carousel.style.cursor = 'grab';
})();
