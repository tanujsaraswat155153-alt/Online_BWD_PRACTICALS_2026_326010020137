const form = document.getElementById('admissionForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  alert('Your sample admission form has been submitted successfully.');
  form.reset();
});