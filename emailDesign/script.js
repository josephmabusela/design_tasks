// Get form data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

    let errorFlag = false;
    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Doesn't mean you can leave it black though!";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1) {
        errorNodes[2].innerText = "Please provide a detailed message description"
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        sucess.innerText = "Sucess!"
    }
}

// clear error / success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    sucess.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}