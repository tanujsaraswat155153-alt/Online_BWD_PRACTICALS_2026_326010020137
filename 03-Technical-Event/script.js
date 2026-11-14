document.getElementById('eventForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('message').textContent = 'Thank you! Your sample registration has been completed.';
  this.reset();
});