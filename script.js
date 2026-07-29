// Tab navigation logic
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function activateTab(link) {
    tabLinks.forEach(l => l.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));
    link.classList.add('active');
    document.getElementById(link.getAttribute('data-tab')).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabLinks.forEach(link => {
    link.addEventListener('click', () => activateTab(link));

    // Keyboard support, since tabs act as buttons (role="button")
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activateTab(link);
        }
    });
});
