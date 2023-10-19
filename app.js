const buttonElement = document.getElementById("btn");
const textAreaElement = document.querySelector('textarea');

document.getElementById("auth_letter").innerHTML = localStorage.getItem("firstLetter").toUpperCase();

function addCSS() {
    const css = textAreaElement.value;
    const foreFront = document.querySelector('#forefront');

    // Regular expression to match flex properties
    const flexPropertiesRegex = /^(?:flex-direction|flex-wrap|justify-content|align-items|align-content|order|flex-grow|flex-shrink|flex-basis|flex)\s*:\s*[^;]+(?:;|$)/gm;

    // Check if the input contains anything other than flex properties
    if (!flexPropertiesRegex.test(css)) {
        // Apply error classes to the textarea for visual feedback
        textAreaElement.classList.add('error-glow', 'error-shake');
        setTimeout(() => {
            textAreaElement.classList.remove('error-glow', 'error-shake');
        }, 1000); // Remove error classes after 1 second
        return;
    }

    // Check if the input contains any negative numbers
    const negativeNumberRegex = /-[0-9]+/g;
    if (negativeNumberRegex.test(css)) {
        // Apply error classes to the textarea for visual feedback
        textAreaElement.classList.add('error-glow', 'error-shake');
        setTimeout(() => {
            textAreaElement.classList.remove('error-glow', 'error-shake');
        }, 1000); // Remove error classes after 1 second
        return;
    }

    // Apply the CSS if it passes the checks
    foreFront.style.cssText = css;
}

buttonElement.addEventListener('click', addCSS);
