document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("dark-mode-toggle");
    toggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    document.querySelectorAll('a').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}