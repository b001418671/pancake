// Initialize EmailJS with your Public Key
emailjs.init('TKjs3zmoukWpPdO9_'); // Replace with your actual Public Key

// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active')); // Hide all sections
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active'); // Show the selected section
    }
}

// Attach event listeners to navigation buttons
document.querySelectorAll('header button, .cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        if (sectionId) showSection(sectionId);
    });
});

// Handle form submission
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const submitButton = document.getElementById('button');
    submitButton.textContent = 'Sending...'; // Update button text while sending

    const serviceID = 'default_service'; // Default EmailJS service
    const templateID = 'template_00yqppl'; // Replace with your actual Template ID

    // Send the form data using EmailJS
    emailjs
        .sendForm(serviceID, templateID, this)
        .then(
            () => {
                submitButton.textContent = 'Subscribe'; // Reset button text
                alert('Email sent successfully!');
                document.getElementById('form').reset(); // Clear the form
            },
           
        );
});

// Select elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('header nav');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const navButtons = document.querySelectorAll('header nav button, header nav a'); // Include links in nav

// Toggle navigation menu for all devices
hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

// Close the navigation menu when a button is clicked (except dropdown buttons)
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent closing the menu if the dropdown button is clicked
        if (button.closest('.dropdown')) {
            e.stopPropagation();
            return;
        }
        nav.classList.remove('active'); // Close the menu for other buttons
    });
});

// Toggle dropdown for "Locations" button
dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent closing the hamburger menu
        e.stopPropagation();

        // Close all other dropdowns before opening the current one
        dropdownContents.forEach(content => {
            if (content !== button.nextElementSibling) {
                content.classList.remove('show');
            }
        });

        // Toggle the dropdown visibility for the clicked Locations button
        const dropdown = button.nextElementSibling;
        dropdown.classList.toggle('show'); // Toggle the dropdown visibility
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdownContents.forEach(content => content.classList.remove('show')); // Close all dropdowns
    }
});








