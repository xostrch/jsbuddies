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

changeLanguage('pl');



function doneStage(stageKey) {
    const stageElement = document.querySelector(`.stage-box[data-stage="${stageKey}"]`);
    const currentColor = window.getComputedStyle(stageElement).backgroundColor;
    if (stageElement && currentColor !== "rgb(40, 236, 98)") {
        stageElement.style.backgroundColor = "rgb(40, 236, 98)";
    }
}

function handleDoneClick() {
    const currentStage = document.querySelector(".stage-modal").getAttribute("data-current-stage");
    if (currentStage) {
        doneStage(currentStage);
        closeModal();
    }
}

function unmarkStage(stageKey){
    const stageElement = document.querySelector(`.stage-box[data-stage="${stageKey}"]`);
    const currentColor = window.getComputedStyle(stageElement).backgroundColor;
    if (stageElement && currentColor === "rgb(40, 236, 98)") {
        stageElement.style.backgroundColor = "#9dafeca9";
    }
}

function handleUnmarkClick(){
    const currentStage = document.querySelector(".stage-modal").getAttribute("data-current-stage");
    if (currentStage) {
        unmarkStage(currentStage);
        closeModal();
    }
}