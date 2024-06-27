document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const registerButton = document.getElementById('register-button');

    registerButton.addEventListener('click', (event) => {
        // Clear previous error messages
        document.querySelectorAll('.error').forEach(errorElement => {
            errorElement.textContent = '';
        });

        let isValid = true;

        // Validate first name
        const firstName = document.getElementById('first-name').value.trim();
        if (!firstName) {
            document.getElementById('first-name-error').textContent = 'Poor';
            isValid = false;
        }

        // Validate last name
        const lastName = document.getElementById('last-name').value.trim();
        if (!lastName) {
            document.getElementById('last-name-error').textContent = 'Poor';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        if (!email) {
            document.getElementById('email-error').textContent = 'Poor';
            isValid = false;
        }

        // Validate password
        const password = document.getElementById('password').value.trim();
        if (!password) {
            document.getElementById('password-error').textContent = 'Poor';
            isValid = false;
        }

        // Validate re-entered password
        const rePassword = document.getElementById('re-password').value.trim();
        if (!rePassword) {
            document.getElementById('re-password-error').textContent = 'Poor or mismatched';
            isValid = false;
        } else if (rePassword !== password) {
            document.getElementById('re-password-error').textContent = 'Passwords do not match';
            isValid = false;
        }

        // Validate gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('gender-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate age
        const age = document.getElementById('age').value.trim();
        if (!age) {
            document.getElementById('age-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate phone number
        const phoneNumber = document.getElementById('phone-number').value.trim();
        if (!phoneNumber) {
            document.getElementById('phone-number-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate address
        const address = document.getElementById('address').value.trim();
        if (!address) {
            document.getElementById('address-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate state
        const state = document.getElementById('state').value.trim();
        if (!state) {
            document.getElementById('state-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate country
        const country = document.getElementById('country').value;
        if (!country) {
            document.getElementById('country-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate languages known
        const languages = document.querySelectorAll('input[name="languages"]:checked');
        if (languages.length === 0) {
            document.getElementById('languages-error').textContent = 'This field is required';
            isValid = false;
        }

        // Validate declaration
        const declaration = document.getElementById('declaration').checked;
        if (!declaration) {
            document.getElementById('declaration-error').textContent = 'This field is required';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
            form.submit(); // Submit the form if all fields are valid
        }
    });
});