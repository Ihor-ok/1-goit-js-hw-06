
const ref = {
    form: document.querySelector(".login-form"),
    
};

ref.form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert("All fields must be filled!!!")
    }

    if (email.length > 0 && password.length > 0) {
        const formObj = {};
        
        formObj.email = email;
        formObj.password = password;
          
        console.log(formObj);
        ref.form.reset();
    }

    
    
};