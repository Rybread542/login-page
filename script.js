const passwordBox1 = document.querySelector('#password1')
const passwordBox2 = document.querySelector('#password2')
const submitButton = document.querySelector('button')
const passwordAlert = document.querySelector('.passwords-dont-match-alert')
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if (passwordBox1.value !== passwordBox2.value) {
        e.preventDefault();
        passwordAlert.style.opacity = '100';
    }
})