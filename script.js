// Tab navigation logic
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(link.getAttribute('data-tab')).classList.add('active');
    });
});
