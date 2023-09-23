const formHero = document.querySelector('.form-hero');
const formCta = document.querySelector('.form-cta');


const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailPattern.test(email);
}

const renderFormError = form => {
    if (form.classList.contains('form-cta')) {
        form.classList.add('form-cta--error')
    }

    if (form.classList.contains('form-hero')) {
        form.classList.add('form-hero--error')
    }
}

const cleanFormError = form => {
    if (form.classList.contains('form-cta')) {
        form.classList.remove('form-cta--error');
    }

    if (form.classList.contains('form-hero')) {
        form.classList.remove('form-hero--error');
    }
}

const cleanFormInput = emailInput => {
    emailInput.value = '';
    emailInput.blur();
}

const handleFormSubmit = event => {    
    event.preventDefault();
    cleanFormError(event.target);
    
    const emailInput = event.target.querySelector('input[type="email"]');

    const inputValue = emailInput.value.trim();
    if (validateEmail(inputValue)) {
        console.log(`Success! ${inputValue} registered.`);
        cleanFormInput(emailInput);
        return;
    }

    renderFormError(event.target);
}

const handleKeyPress = event => {
    // Escape clean up form (even if form is not focused)
    if (event.key === 'Escape') {
        [formHero, formCta]
            .forEach(form => cleanFormInput(form.querySelector('input[type="email"]')));
        return;
    }
}

[formHero, formCta]
    .forEach(form => form.addEventListener('submit', handleFormSubmit));

// to clean up form input when user press Ecsape
document.body.addEventListener('keydown', handleKeyPress);
