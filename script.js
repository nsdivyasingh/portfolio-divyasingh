
// Text Animation for "Hi! I'm NS Divya Singh"
document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById("animate-text");
    const text = introText.innerText;
    introText.innerText = ""; // Clear the original text

    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.innerText = char;
        if (char === " ") {
            span.innerHTML = "&nbsp;"; // Handle space
        }
        span.style.animationDelay = `${0.1 * index}s`;
        introText.appendChild(span);
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // Check if dark mode is active
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light"); // Save light mode
    } else {
        body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark"); // Save dark mode
    }
}

// Load Saved Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-icon").classList.remove("fa-moon");
        document.getElementById("theme-icon").classList.add("fa-sun");
    }
});

// Highlight Active Section in Navbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 70; // Offset for navbar height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        // Remove 'active' class from all links
        navLinks.forEach((link) => {
            link.classList.remove("active");

            // Add 'active' class to matching section link
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
    navLinks.classList.toggle('active');
});



