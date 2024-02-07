const newsletterSubmitBtn = document.querySelector("#newsletter-submit");
const emailInput = document.querySelector("#email");
const allInputs = document.querySelectorAll(".newsletter__input");
let formErrors = {};

function checkInputIsEmpty() {
    let isInputEmpty = false;

    allInputs.forEach(input => {
        if (input.value.length === 0) {
            isInputEmpty = true;
            return;
        }
    })

    if (isInputEmpty) return true;

    return false;
}

function setInputError(inputElement, textError) {
    const inputElementParent = inputElement.parentElement;
    const errorTextElement = inputElementParent.querySelector(".newsletter__text-error");

    inputElement.classList.add("newsletter__input-error");
    errorTextElement.style.visibility = "visible";
    errorTextElement.textContent = textError;
}

function hideInputError(inputElement) {
    const inputElementParent = inputElement.parentElement;
    const errorTextElement = inputElementParent.querySelector(".newsletter__text-error");

    inputElement.classList.remove("newsletter__input-error");
    errorTextElement.style.visibility = "hidden";
}

function validateEmail() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailInput.value.match(emailRegex)) {
        setInputError(emailInput, "valid email required");
        formErrors.email = true;
        return;
    }

    hideInputError(emailInput);
}

function validateAllInputs() {
    formErrors = {};

    validateEmail();
}

newsletterSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (Object.keys(formErrors).length > 0 || checkInputIsEmpty()) {
        validateAllInputs();
        return;
    }

    console.log('sent!')
})

emailInput.addEventListener("blur", () => {
    validateEmail();
})