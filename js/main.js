function changeLanguage(lang){
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el =>{
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key] || `[${key}]`;

    })
}

changeLanguage('pl')