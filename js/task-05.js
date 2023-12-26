const ref = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output"),
}

ref.inputName.addEventListener('input', recordOutput);

function recordOutput (evt) {
    ref.outputName.textContent = evt.currentTarget.value;
   
    if (ref.outputName.textContent === "") {
        ref.outputName.textContent = "Anonymous";
    };
    
   };
