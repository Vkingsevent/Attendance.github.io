// Retrieve attendance data from local storage
const storedAttendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

// Create a formatted string for the attendance data
const formattedData = storedAttendanceData.map(entry => `👷🏻 ${entry.workerName} 📅 ${entry.attendanceDate} 📍 ${entry.place}`).join('\n');

// Create a Blob with the formatted data
const blob = new Blob([formattedData], { type: 'text/plain' });

// Create a download link
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'attendance_list.txt';
downloadLink.textContent = 'Download Attendance List';

// Append the link to the document
document.body.appendChild(downloadLink);
