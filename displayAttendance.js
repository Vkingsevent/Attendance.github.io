// ... (existing code)

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
downloadLink.textContent = 'Download List';

// Add some styles to make it attractive
downloadLink.style.padding = '10px';
downloadLink.style.backgroundColor = '#3498db';
downloadLink.style.color = '#fff';
downloadLink.style.textDecoration = 'none';
downloadLink.style.borderRadius = '5px';
downloadLink.style.fontWeight = 'bold';
downloadLink.style.cursor = 'pointer';

// Append the link to the document
document.body.appendChild(downloadLink);

// Create a redirect link
const redirectLink = document.createElement('a');
redirectLink.href = 'Attendance Registration.html';
redirectLink.textContent = 'Go to Registration';

// Add some styles to make it attractive
redirectLink.style.padding = '10px';
redirectLink.style.backgroundColor = '#27ae60';
redirectLink.style.color = '#fff';
redirectLink.style.textDecoration = 'none';
redirectLink.style.borderRadius = '5px';
redirectLink.style.fontWeight = 'bold';
redirectLink.style.cursor = 'pointer';
redirectLink.style.marginTop = '10px'; // Add some margin to separate the links

// Append the link to the document
document.body.appendChild(redirectLink);


