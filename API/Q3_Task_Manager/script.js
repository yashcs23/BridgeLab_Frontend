let allTasks = [];

$(document).ready(function() {
    loadTasks();

    $('#filterSelect').on('change', function() {
        loadTasks();
    });
});

function loadTasks() {
    const filter = $('#filterSelect').val();
    const loadingIndicator = $('#loadingIndicator');
    
    loadingIndicator.show();

    $.ajax({
        url: 'db.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            loadingIndicator.hide();
            allTasks = data.tasks;
            renderTasks(filter);
        },
        error: function() {
            loadingIndicator.hide();
            $('#tasksList').html(`
                <div class="no-tasks">
                    <div class="no-tasks-icon">❌</div>
                    <p>Error loading tasks</p>
                </div>
            `);
        }
    });
}

function renderTasks(filter) {
    const tasksList = $('#tasksList');
    let filteredTasks = allTasks;

    // Apply filter
    if (filter === 'low') {
        filteredTasks = allTasks.filter(t => t.priority === 'low');
    } else if (filter === 'medium') {
        filteredTasks = allTasks.filter(t => t.priority === 'medium');
    } else if (filter === 'high') {
        filteredTasks = allTasks.filter(t => t.priority === 'high');
    } else if (filter === 'completed') {
        filteredTasks = allTasks.filter(t => t.completed === true);
    }

    // Clear and render
    tasksList.empty();

    if (filteredTasks.length === 0) {
        tasksList.html(`
            <div class="no-tasks">
                <div class="no-tasks-icon">📋</div>
                <p>No tasks found</p>
            </div>
        `);
        return;
    }

    filteredTasks.forEach(task => {
        const taskClass = task.completed ? 'task-item completed' : 'task-item';
        const html = `
            <div class="${taskClass}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    onchange="toggleTask(${task.id}, this)"
                >
                <div class="task-content">
                    <div class="task-title">${task.title}</div>
                    <span class="task-priority ${task.priority}">
                        ${task.priority} Priority
                    </span>
                </div>
            </div>
        `;
        tasksList.append(html);
    });
}

function toggleTask(taskId, checkbox) {
    const task = allTasks.find(t => t.id === taskId);
    if (!task) return;

    const newCompleted = !task.completed;
    checkbox.disabled = true;

    $.ajax({
        url: 'db.json',
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify({ completed: newCompleted }),
        success: function() {
            checkbox.disabled = false;
            task.completed = newCompleted;
            const filter = $('#filterSelect').val();
            renderTasks(filter);
        },
        error: function() {
            checkbox.disabled = false;
            checkbox.checked = !checkbox.checked;
        }
    });
}
