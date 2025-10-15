// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    const dropdowns = document.querySelectorAll('.dropdown');
    const countdownContainer = document.getElementById('countdown');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playButton = document.querySelector('.play-button');
    
    // Wedding date - update this to your wedding date
    const weddingDate = new Date('April 06, 2025 11:00:00').getTime();
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile dropdown toggles
    for (const dropdown of dropdowns) {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
            }
        });
    }
    
    // Countdown timer
    if (countdownContainer) {
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result
            document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
            
            // If the countdown is over
            if (distance < 0) {
                clearInterval(countdownTimer);
                countdownContainer.innerHTML = "<h3>Hạnh phúc vĩnh cửu!</h3>";
            }
        }
        
        // Update the countdown every 1 second
        updateCountdown();
        const countdownTimer = setInterval(updateCountdown, 1000);
    }
    
    // Video play button
    if (playButton && videoPlaceholder) {
        playButton.addEventListener('click', function() {
            // Replace with your actual video URL
            const videoUrl = "https://www.youtube.com/embed/your-video-id?autoplay=1";
            const iframe = document.createElement('iframe');
            
            iframe.setAttribute('src', videoUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            
            videoPlaceholder.innerHTML = '';
            videoPlaceholder.appendChild(iframe);
        });
    }
    
    // Download invite button
    const downloadInvite = document.getElementById('downloadInvite');
    if (downloadInvite) {
        downloadInvite.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Tính năng tải thiệp sẽ được cập nhật sớm!');
            // Implement the download functionality
        });
    }
    
    // Initialize gallery lightbox if needed
    // You can add a lightbox library here
});
