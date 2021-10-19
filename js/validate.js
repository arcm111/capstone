"use strict";

// Check if a input's value string contains only alphabets and hyphens
// Used to check first and last names
function validateString(input) {
    let txt = input.value;
    let regex = new RegExp("^[a-zA-Z\-]+$");
    let isValid = txt && regex.test(txt);
    updateState(input, isValid);
}

// Check if input's value string contains only digits and plus sign
// Used to check phone numbers
function validatePhoneNumber(input) {
    let txt = input.value;
    let regex = new RegExp("^[0-9+]+$");
    let isValid = txt && regex.test(txt);
    updateState(input, isValid);
}

// Check if input's value string contains a valid email address
function validateEmail(input) {
    let txt = input.value;
    let regex = new RegExp("^(.+)@(.+){2,}\.(.+){2,}$");
    let isValid = txt && regex.test(txt);
    updateState(input, isValid);
}

function updateState(input, isValid) {
    let classToAdd = isValid ? "valid" : "invalid";
    let classToRemove = isValid ? "invalid" : "valid";
    if (input.classList.contains(classToRemove)) {
        input.classList.remove(classToRemove);
    }
    input.classList.add(classToAdd);
}

function validateForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (!element.value || element.classList.contains("invalid")) {
            alert("Error. Check your details and try again!");
            return false;
        }
    }
    alert("Thank you, we will get back in touch with you shortly.");
    return false;
}
