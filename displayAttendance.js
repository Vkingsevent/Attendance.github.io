// Retrieve attendance data from local storage
const storedAttendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
const displayArea = document.getElementById('savedAttendanceDisplay');

// Display attendance on the webpage
storedAttendanceData.forEach(entry => {
  const paragraph = document.createElement('p');
  paragraph.textContent = `Worker: ${entry.workerName}, Date: ${entry.attendanceDate}, Place: ${entry.place}`;
  displayArea.appendChild(paragraph);
});
