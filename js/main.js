function changeLanguage(lang){
    currentLanguage = lang; // zapamiętujemy język
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el =>{
        const key = el.getAttribute('data-translate');
        const translation = translations[lang][key] || `[${key}]`;

        if(key.includes("content")) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });
};

changeLanguage('pl')