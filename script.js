window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.remove('fade-out');
        } else {
            section.classList.add('fade-out');
        }
    });
});