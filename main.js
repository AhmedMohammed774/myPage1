
AOS.init();

// Back to Top Button Visibility
window.onscroll = function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
    
    
const toggleButton = document.getElementById('night-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle dark-mode class for specific components
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('.skill-item').forEach(item => item.classList.toggle('dark-mode'));
    document.querySelector('.contact-form').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.back-to-top').classList.toggle('dark-mode');

    // Change button icon and text dynamically
    const icon = toggleButton.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
    }
});
