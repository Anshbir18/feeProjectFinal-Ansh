const buttonElement = document.getElementById("btn");
const textAreaElement = document.querySelector('textarea');

document.getElementById("auth_letter").innerHTML = localStorage.getItem("firstLetter").toUpperCase();

function displayError(message) {
    // Display an error message to the user
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    textAreaElement.insertAdjacentElement("afterend", errorMessage);

    // Apply error classes for visual feedback
    textAreaElement.classList.add('error-glow', 'error-shake');

    // Remove error classes and the error message after 1 second
    setTimeout(() => {
        textAreaElement.classList.remove('error-glow', 'error-shake');
        errorMessage.remove();
    }, 1000);
}

function addCSS() {
    const css = textAreaElement.value;
    const foreFront = document.querySelector('#forefront');

    // Regular expression to match flex properties
    const flexPropertiesRegex = /^(?:flex-direction|flex-wrap|justify-content|align-items|align-content|order|flex-grow|flex-shrink|flex-basis|flex)\s*:\s*[^;]+(?:;|$)/gm;

    // Check if the input contains anything other than flex properties
    if (!flexPropertiesRegex.test(css)) {
        displayError("Invalid CSS: Only flex properties are allowed.");
        return;
    }

    // Check if the input contains any negative numbers
    const negativeNumberRegex = /-[0-9]+/g;
    if (negativeNumberRegex.test(css)) {
        displayError("Invalid CSS: Negative values are not allowed.");
        return;
    }

    // Apply the CSS if it passes the checks
    foreFront.style.cssText = css;
}

buttonElement.addEventListener('click', addCSS);
