const eligibilityForm = document.getElementById('eligibilityForm');

eligibilityForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const age = Number(document.getElementById('age').value);
  const attendance = Number(document.getElementById('attendance').value);
  const marks = Number(document.getElementById('marks').value);

  if (!Number.isFinite(age) || !Number.isFinite(attendance) ||
      !Number.isFinite(marks) || age <= 0 ||
      attendance < 0 || attendance > 100 || marks < 0 || marks > 100) {
    alert('Please enter valid values. Attendance and marks must be from 0 to 100.');
    return;
  }

  // These are sample eligibility conditions for this practical.
  const eligible = age >= 16 && attendance >= 75 && marks >= 40;
  const message = eligible
    ? 'Eligible: The student meets all sample requirements.'
    : 'Not eligible: The student does not meet one or more sample requirements.';

  document.getElementById('result').textContent = message;
  alert(message);
});