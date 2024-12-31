document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const studentYear = document.getElementById('studentYear').value;
    const studentGPA = document.getElementById('studentCGPA').value;

    addStudentToTable(studentId, studentName, studentYear, studentGPA);

    document.getElementById('addStudentForm').reset();
});

function addStudentToTable(id, name, year, gpa) {
    const studentList = document.getElementById('studentList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${year}</td>
        <td>${gpa}</td>
    `;

    studentList.appendChild(row);
}