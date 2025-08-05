document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeSwitch = document.getElementById('theme-switch');
    const darkModeStyle = document.getElementById('dark-mode-style');
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkModeStyle.disabled = false;
        themeSwitch.checked = true;
    }
    
    // Theme switcher event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            darkModeStyle.disabled = false;
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeStyle.disabled = true;
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Optional: Add smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeSwitch = document.getElementById('theme-switch');
    const darkModeStyle = document.getElementById('dark-mode-style');
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkModeStyle.disabled = false;
        themeSwitch.checked = true;
    }
    
    // Theme switcher event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            darkModeStyle.disabled = false;
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeStyle.disabled = true;
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Optional: Add smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});