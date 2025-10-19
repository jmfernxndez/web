// Language detection and redirect
(function() {
    if (!localStorage.getItem('langPreference')) {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0].toLowerCase();
        
        const langMap = {
            'es': '/es/',
            'de': '/de/',
            'fr': '/fr/',
            'pt': '/pt/',
            'ar': '/ar/',
            'ja': '/ja/',
            'zh': '/zh/',
            'cn': '/zh/'
        };
        
        if (langMap[langCode] && window.location.pathname === '/') {
            window.location.href = langMap[langCode];
        }
    }
})();

// Theme toggle function
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

// Save language preference
localStorage.setItem('langPreference', 'en');

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});