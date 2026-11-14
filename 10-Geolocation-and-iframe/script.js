const button = document.getElementById('locateBtn');
const result = document.getElementById('locationResult');
button.addEventListener('click', () => {
  if (!navigator.geolocation) {
    result.textContent = 'Geolocation is not supported by this browser.';
    return;
  }
  result.textContent = 'Please allow location access in your browser.';
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      result.textContent = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
    },
    error => {
      result.textContent = `Unable to get location: ${error.message}`;
    },
    { timeout: 10000 }
  );
});