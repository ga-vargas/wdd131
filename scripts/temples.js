
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

const hamburgerButton = document.getElementById('hamburgerButton');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        hamburgerButton.textContent = 'X';
    } else {
        hamburgerButton.textContent = '☰';
    }
});