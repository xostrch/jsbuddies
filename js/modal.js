const blurAll = document.querySelector(".blur-all");
const stageModal = document.querySelector(".stage-modal");
const modalTitle = document.querySelector(".modal-title");
const modalContent = document.querySelector(".modal-content");
const body = document.getElementById("body");

function showModal(stageKey){
    const modalTranslateKeyTitle = `modal${stageKey}title`;
    const modalTranslateKeyContent = `modal${stageKey}content`;
    modalTitle.setAttribute("data-translate", modalTranslateKeyTitle);
    modalContent.setAttribute("data-translate", modalTranslateKeyContent);

    
    blurAll.style.display = "flex";
    stageModal.style.display = "flex";
    body.style.overflow="hidden";
    changeLanguage(currentLanguage);
}

function closeModal(){
    blurAll.style.display = "none";
    stageModal.style.display = "none";
    body.style.overflow="visible";
}
