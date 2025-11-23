const searchBox = document.getElementById('searchBox');
const tableBody = document.querySelector('tbody');
const noResultsMsg = document.getElementById('noResultsMsg');

// Sample student data
const students = [
  { name: 'Alice Johnson', branch: 'CSE', cgpa: '3.8' },
  { name: 'Bob Smith', branch: 'ECE', cgpa: '3.5' },
  { name: 'Charlie Brown', branch: 'ME', cgpa: '3.2' },
  { name: 'Diana Prince', branch: 'CSE', cgpa: '3.9' },
  { name: 'Eve Wilson', branch: 'EE', cgpa: '3.6' },
  { name: 'Frank Miller', branch: 'ME', cgpa: '3.7' }
];

// Populate table
students.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.branch}</td>
    <td>${student.cgpa}</td>
  `;
  tableBody.appendChild(row);
});

// Filter on input
searchBox.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const rows = tableBody.querySelectorAll('tr');
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    const isMatch = text.includes(searchTerm);

    row.style.display = isMatch ? '' : 'none';
    if (isMatch) visibleCount++;
  });

  // Show "No results" message
  noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
});
