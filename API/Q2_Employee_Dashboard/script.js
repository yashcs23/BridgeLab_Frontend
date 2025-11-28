let employeesData = [];

function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'db.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            employeesData = data.employees;
            renderEmployees();
        }
    };
    
    xhr.onerror = function() {
        showError('Failed to load employees');
    };
    
    xhr.send();
}

function renderEmployees() {
    const tableBody = document.getElementById('employeesTableBody');
    tableBody.innerHTML = '';

    employeesData.forEach(employee => {
        const row = document.createElement('tr');
        const isActive = employee.status === 'active';
        
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>
                <span class="status-badge ${employee.status}">
                    ${employee.status}
                </span>
            </td>
            <td>
                <label class="toggle-switch">
                    <input 
                        type="checkbox" 
                        ${isActive ? 'checked' : ''} 
                        onchange="toggleEmployeeStatus(${employee.id}, this)"
                    >
                    <span class="slider"></span>
                </label>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function toggleEmployeeStatus(employeeId, checkbox) {
    const employee = employeesData.find(e => e.id === employeeId);
    if (!employee) return;

    const newStatus = employee.status === 'active' ? 'inactive' : 'active';
    const originalStatus = employee.status;

    // Disable the toggle while request is in progress
    checkbox.disabled = true;

    const xhr = new XMLHttpRequest();
    const url = `db.json`;
    
    xhr.open('PATCH', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        checkbox.disabled = false;
        
        if (xhr.status === 200 || xhr.status === 204) {
            // Update the data
            employee.status = newStatus;
            renderEmployees();
            showSuccess(`${employee.name}'s status updated to ${newStatus}`);
        } else {
            // Revert the checkbox
            checkbox.checked = !checkbox.checked;
            showError(`Failed to update ${employee.name}'s status`);
        }
    };
    
    xhr.onerror = function() {
        checkbox.disabled = false;
        // Revert the checkbox
        checkbox.checked = !checkbox.checked;
        showError(`Error updating ${employee.name}'s status. Please try again.`);
    };
    
    const payload = JSON.stringify({ status: newStatus });
    xhr.send(payload);
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = '❌ ' + message;
    errorDiv.classList.remove('success');
    errorDiv.style.display = 'flex';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 4000);
}

function showSuccess(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = '✓ ' + message;
    errorDiv.classList.add('success');
    errorDiv.style.display = 'flex';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

// Load employees on page load
document.addEventListener('DOMContentLoaded', fetchEmployees);
