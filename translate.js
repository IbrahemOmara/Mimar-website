let currentLang = localStorage.getItem('lang') || 'en';
const langToggleBtn = document.getElementById('lang-toggle');

function switchLang() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang); // نحفظ اللغة
    langToggleBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
    translatePage(currentLang);
}

langToggleBtn.addEventListener('click', switchLang);

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
        el.textContent = translations[lang][key];
        }
    });

    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// نترجم أول ما الصفحة تفتح على حسب اللغة المحفوظة
translatePage(currentLang);
langToggleBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';



