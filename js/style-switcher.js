/* ============================== toggle style switcher =================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ============================== theme colors =================== */

const alternateStyles = document.querySelectorAll(".alternate-style");
// Function to set the active style based on the selected color
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Save the selected color to localStorage
    localStorage.setItem("themeColor", color);
    
    // Hide the style switcher after selecting a color
    document.querySelector(".style-switcher").classList.remove("open");
}

// Function to check and apply the theme from localStorage when the page loads
function applySavedTheme() {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
        setActiveStyle(savedColor);
    }
}

// Event listener to ensure this runs once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", applySavedTheme);

/* ============================== theme light and dark mode =================== */

// Immediately apply the theme when the script loads to avoid flickering
(function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
})();

// Select the day-night toggle element
const dayNight = document.querySelector(".day-night");

// Event listener for clicking the dark/light mode toggle
dayNight.addEventListener("click", () => {
    // Toggle icons
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");

    // Toggle dark mode
    document.body.classList.toggle("dark");

    // Save the current state to localStorage
    updateLocalStorage();

    // Hide the style switcher after changing the theme
    document.querySelector(".style-switcher").classList.remove("open");
});

// Function to update localStorage with the current theme
function updateLocalStorage() {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


// Apply the saved theme when the page loads
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
});

