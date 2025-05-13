// Smooth scroll animation for navigation links

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const section = document.querySelector(href);
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact form validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                e.preventDefault();
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                e.preventDefault();
            }
        });
    }
});
