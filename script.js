// Initialisation d'AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Configuration d'AOS
    AOS.init({
        duration: 1000,           // Durée des animations
        easing: 'ease-in-out',    // Type d'easing
        once: true,              // Animation une seule fois
        mirror: false,           // Pas d'animation au scroll inverse
        anchorPlacement: 'top-bottom', // Point d'ancrage
        offset: 100,             // Offset en pixels
        delay: 0,                // Délai par défaut
        disable: false,          // Désactiver sur mobile si nécessaire
    });

    // Configuration responsive d'AOS
    function handleAOSResize() {
        if (window.innerWidth < 768) {
            // Sur mobile, réduire les délais et désactiver certaines animations
            AOS.refresh();
        } else {
            AOS.refresh();
        }
    }

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', handleAOSResize);
    handleAOSResize(); // Appel initial

    // Smooth scroll pour les liens de navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de soumission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.style.opacity = '0.7';
            
            // Simulation d'envoi (remplacer par vraie logique)
            setTimeout(() => {
                submitBtn.textContent = 'Message envoyé !';
                submitBtn.style.background = '#27ae60';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Animation des cartes de compétences au hover
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animation des cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.project-image .placeholder-image');
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.project-image .placeholder-image');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    // Effet parallaxe léger pour la section hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Navigation active basée sur le scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Appel initial

    // Animation des chiffres (si vous ajoutez des statistiques)
    function animateNumbers() {
        const numbers = document.querySelectorAll('.number');
        numbers.forEach(number => {
            const target = parseInt(number.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    number.textContent = target;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 20);
        });
    }

    // Intersection Observer pour les animations personnalisées
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animation des nombres si présents
                const numbers = entry.target.querySelectorAll('.number');
                if (numbers.length > 0) {
                    animateNumbers();
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe 'observe'
    const observeElements = document.querySelectorAll('.observe');
    observeElements.forEach(el => observer.observe(el));

    // Gestion du bouton CTA principal
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Scroll vers la section suivante
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Préchargement des images (si vous ajoutez de vraies images)
    function preloadImages() {
        const imageUrls = [
            // Ajoutez ici les URLs de vos images
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Appel du préchargement
    preloadImages();

    // Gestion des erreurs AOS
    AOS.refreshHard();

    // Performance : Désactiver AOS sur les appareils avec peu de puissance
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        AOS.init({
            disable: true
        });
    }

    // Log pour le débogage
    console.log('Portfolio initialisé avec succès !');
    console.log('AOS version:', AOS.version);
});

// Fonction utilitaire pour créer des animations personnalisées
function createCustomAnimation(element, animationType, duration = 1000) {
    element.style.animation = `${animationType} ${duration}ms ease-in-out`;
}

// Fonction pour ajouter un effet de typing
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Fonction pour créer un effet de particules (optionnel)
function createParticles(container) {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
    }
}

// Export des fonctions pour utilisation externe
window.PortfolioAnimations = {
    createCustomAnimation,
    typeWriter,
    createParticles
};
