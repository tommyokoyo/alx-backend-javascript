interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');
        // @ts-ignore
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable();
