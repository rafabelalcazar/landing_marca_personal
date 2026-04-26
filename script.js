// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation elements
    const cards = document.querySelectorAll('.card');
    const premiumBox = document.querySelector('.premium-box');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in class and observe
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        // Add a slight stagger effect based on index
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    if (premiumBox) {
        premiumBox.classList.add('fade-in');
        observer.observe(premiumBox);
    }

    // Button interactions (simulating checkout/signup)
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.classList.contains('disabled')) {
                e.preventDefault();
                return;
            }
            
            // If it's an anchor link, let the smooth scroll handle it
            if (btn.tagName.toLowerCase() === 'a') return;

            // Otherwise, it's a button
            // Here you would normally redirect to a checkout or form
            const text = btn.innerText;
            if(text.includes('Gratis')) {
                alert('¡Redirigiendo al formulario de registro gratuito!');
            } else if (text.includes('Apunto')) {
                alert('¡Redirigiendo a la página de pago del reto!');
            } else if (text.includes('Fundador')) {
                alert('¡Redirigiendo a la aplicación del Grupo Fundador!');
            }
        });
    });
});
