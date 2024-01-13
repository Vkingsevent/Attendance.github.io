// Retrieve attendance data from local storage
const storedAttendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
const displayArea = document.getElementById('savedAttendanceDisplay');

// Create a formatted string for the attendance data
const formattedData = storedAttendanceData.map(entry => `👷🏻 ${entry.workerName} 📅 ${entry.attendanceDate} 📍 ${entry.place}`).join('\n');

// Display attendance on the webpage
storedAttendanceData.forEach(entry => {
  const paragraph = document.createElement('p');
  paragraph.textContent = `👷🏻 ${entry.workerName} 📅 ${entry.attendanceDate} 📍 ${entry.place}`;
  displayArea.appendChild(paragraph);
});

// Create a Blob with the formatted data
const blob = new Blob([formattedData], { type: 'text/plain' });

// Create a download link
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'attendance_list.txt';
downloadLink.textContent = 'Download Attendance List';

// Append the link to the document
document.body.appendChild(downloadLink);
  
