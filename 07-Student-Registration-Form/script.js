const form = document.getElementById('registrationForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('formMessage').textContent =
    'Form validated successfully. This demonstration does not send or store personal data.';
  form.reset();
});