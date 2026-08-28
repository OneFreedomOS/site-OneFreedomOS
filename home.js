const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('siteLang') || 'en';

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    if (lang === 'en') {
        langToggle.textContent = 'RU';
        document.getElementById('link-home').textContent = 'Home';
        document.getElementById('link-installer').textContent = 'Installer';
        document.getElementById('link-community').textContent = 'Community';
    } else {
        langToggle.textContent = 'EN';
        document.getElementById('link-home').textContent = 'Главная';
        document.getElementById('link-installer').textContent = 'Установка';
        document.getElementById('link-community').textContent = 'Сообщество';
    }
}

applyLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('siteLang', currentLang);
    applyLanguage(currentLang);
});
