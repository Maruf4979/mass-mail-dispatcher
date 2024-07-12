document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const emailForm = document.getElementById('email-form');
    const templateForm = document.getElementById('template-form');
    const recipientForm = document.getElementById('recipient-form');
    const navLinks = document.querySelectorAll('#main-nav a');

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.id.replace('-link', '');
            showSection(targetId);
        });
    });

    // Authentication
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement login logic here
        console.log('Login submitted');
        showSection('dashboard');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement signup logic here
        console.log('Signup submitted');
        showSection('dashboard');
    });

    // Email composition and sending
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement email sending logic here
        console.log('Email submitted');
    });

    // Template management
    templateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement template saving logic here
        console.log('Template saved');
    });

    // Recipient management
    recipientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement recipient list creation logic here
        console.log('Recipient list created');
    });

    // Helper function to show/hide sections
    function showSection(sectionId) {
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    }

    // Initial setup
    showSection('login');
});