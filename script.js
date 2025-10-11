// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animations
window.addEventListener('load', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger animations
    setTimeout(animateOnScroll, 300);
});

// Handle scroll events
window.addEventListener('scroll', animateOnScroll);

// Lazy load YouTube iframes
const lazyLoadVideos = () => {
    const lazyVideos = document.querySelectorAll('iframe[data-src]');
    
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                    videoObserver.unobserve(iframe);
                }
            });
        });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    }
};

// Initialize lazy loading
lazyLoadVideos();

// Add a simple console greeting
console.log('%c¡Bienvenido a mi portafolio!', 'color: #3498db; font-size: 18px; font-weight: bold;');
console.log('%cAquí puedes ver mis proyectos más recientes.', 'color: #2c3e50; font-size: 14px;');
