const marksForm = document.getElementById('marksForm');

function calculateGrade(percentage) {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 40) return 'D';
  return 'F';
}

marksForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(marksForm);
  const marks = [1, 2, 3, 4, 5].map(number =>
    Number(formData.get(`subject${number}`))
  );

  if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    alert('Please enter valid marks between 0 and 100 for every subject.');
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / marks.length;
  const grade = calculateGrade(percentage);
  const passed = marks.every(mark => mark >= 35);

  document.getElementById('total').textContent = `Total Marks: ${total} / 500`;
  document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
  document.getElementById('grade').textContent = `Grade: ${grade}`;
  document.getElementById('status').textContent = passed ? 'Result: Pass' : 'Result: Fail (one or more subjects below 35)';
  document.getElementById('result').hidden = false;
});