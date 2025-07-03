// JavaScript for Enhanced Interactivity
        // Navigation active state management
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Set initial active state
        navLinks.forEach((link, index) => {
            link.classList.remove('active');
            if (index === 0) { // Default to first link (Home)
                link.classList.add('active');
            }
        });
        
        // Handle navigation clicks
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            });
        });
        
        // Hide border when mouse leaves navigation
        navContainer.addEventListener('mouseleave', function() {
            hideBorder();
        });

        // Smooth scrolling for navigation links
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

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all elements with animate-fade-in class
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }
        });

        // Wishlist button toggle
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.style.background = '#395144';
                    this.style.color = 'white';
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.style.background = 'rgba(57, 81, 68, 0.1)';
                    this.style.color = '#395144';
                }
            });
        });

        // Add to cart animation
        document.querySelectorAll('.product-buttons .btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.background = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = 'linear-gradient(135deg, #395144 0%, #4A6741 100%)';
                }, 2000);
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-image');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Loading animation on page load
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        });

        // Initialize page with loading state
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        document.body.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        // FAQ Toggle Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });