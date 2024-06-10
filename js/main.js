const submitBtn = document.getElementById('submitBtn');
const bookmarkNameInput = document.getElementById('bookmarkName');
const bookmarkUrlInput = document.getElementById('bookmarkUrl');
const bookmarkTableBody = document.getElementById('bookmarkTableBody');
let index = 1;




submitBtn.addEventListener('click', function () {
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();

    if (name && url) {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        indexCell.textContent = index++;
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        const visitCell = document.createElement('td');
        const visitButton = document.createElement('button');
        visitButton.textContent = 'Visit';
        visitButton.addEventListener('click', function () {
            window.open(url, '_blank');
        });
        visitCell.appendChild(visitButton);
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            row.remove();
        });
        deleteCell.appendChild(deleteButton);

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(visitCell);
        row.appendChild(deleteCell);

        bookmarkTableBody.appendChild(row);

        // Clear input fields after submission
        bookmarkNameInput.value = '';
        bookmarkUrlInput.value = '';
    } else {
        alert('Please enter both site name and URL.');
    }
});