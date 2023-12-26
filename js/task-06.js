const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', checkInputValid);
inputEl.addEventListener('blur', checkInputInvalid);

function checkInputValid(evt) {
    
    if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {
        
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
};

function checkInputInvalid(evt) {
    if (evt.currentTarget.value.length !== Number(inputEl.dataset.length)) {
              
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid");
        
    }
};

