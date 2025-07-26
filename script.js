document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (if any were added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a class to sections when they are in view for fade-in effect
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Add initial hidden state
        observer.observe(section);
    });
});

// Add these to your style.css for the fade-in effect
/*
.hidden-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
*/