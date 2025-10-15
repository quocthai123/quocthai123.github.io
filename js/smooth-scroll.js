// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links with class 'scroll-link'
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    // Add click event listener to each scroll link
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the navbar height
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                
                // Calculate the position to scroll to
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Scroll smoothly to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const menu = document.querySelector('.menu');
                const menuToggle = document.querySelector('.menu-toggle');
                
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
});
