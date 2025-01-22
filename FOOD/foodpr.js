// JavaScript functionality for the food processing website

// Toggle Side Navigation Bar
function toggleNavbar() {
    const sideNav = document.getElementById('sideNavigationBar');
    if (sideNav.style.display === 'block') {
        sideNav.style.display = 'none';
    } else {
        sideNav.style.display = 'block';
    }
}

// Form Validation for Contact Section
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a, .sideNavigationBar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetHref = this.getAttribute('href');

        if (targetHref.startsWith("#")) {
            e.preventDefault();
            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    });
});

// Redirect to Second Page for Specific Links
document.querySelectorAll('.redirect-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');

        if (targetPage) {
            window.location.href = targetPage;
        }
    });
});
