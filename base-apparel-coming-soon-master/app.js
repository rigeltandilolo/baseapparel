const form = document.querySelector('form');
const submit = document.querySelector('button');
const error__message = document.querySelector('.error__message');
const error__icon = document.querySelector('.error__icon');
const email = document.querySelector('input');

form.addEventListener('submit', validate);
submit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    const input__value = email.value.trim();
    // .trim() method removes white spaces after typing the email input

    if (!isEmail(input__value)) {
        error__message.style.display = 'block'
        error__icon.style.display = 'block'
    } else {
        error__message.style.display = 'none'
        error__icon.style.display = 'none'
    }
};

//the function isEmail validates the email id
function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}