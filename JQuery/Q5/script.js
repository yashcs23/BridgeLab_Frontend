$(document).ready(function() {
    // Click manager to highlight all direct reports
    $('.employee.manager').on('click', function(e) {
        e.stopPropagation();
        
        // Clear previous highlights
        $('.employee').removeClass('highlighted');
        
        const reports = $(this).data('reports').split(',');
        
        // Highlight all direct reports
        reports.forEach(function(reportId) {
            $('[data-id="' + reportId + '"]').addClass('highlighted');
        });
        
        alert('Highlighted ' + reports.length + ' direct reports for ' + $(this).find('.employee-name').text());
    });

    // Hover on employee to show contact info using .next()
    $('.employee').on('mouseenter', function() {
        $(this).find('.employee-contact').addClass('show');
    }).on('mouseleave', function() {
        $(this).find('.employee-contact').removeClass('show');
    });

    // Click department header to highlight all members in that department
    $('.department-header').on('click', function() {
        const $department = $(this).closest('.department');
        
        // Clear previous highlights
        $('.department').removeClass('highlight');
        $('.employee').removeClass('highlighted');
        
        // Highlight current department
        $department.addClass('highlight');
        
        // Highlight all members using .children()
        $department.find('.team-members').children().each(function() {
            if ($(this).hasClass('employee')) {
                $(this).addClass('highlighted');
            }
        });
    });

    // Select random employee and highlight siblings
    $('#randomEmployee').on('click', function() {
        const $allEmployees = $('.employee');
        const randomIndex = Math.floor(Math.random() * $allEmployees.length);
        const $randomEmployee = $allEmployees.eq(randomIndex);

        // Clear previous highlights
        $('.employee').removeClass('highlighted');

        // Highlight the random employee
        $randomEmployee.addClass('highlighted');

        // Highlight siblings using .siblings()
        $randomEmployee.siblings('.employee').addClass('highlighted');

        const employeeName = $randomEmployee.find('.employee-name').text();
        const siblingCount = $randomEmployee.siblings('.employee').length;
        alert('Selected: ' + employeeName + '\nHighlighted ' + (siblingCount + 1) + ' employees in same team!');
    });

    // Toggle team expansion/collapse using .parent() and .find()
    $('.department-header').on('dblclick', function() {
        const $teamMembers = $(this).next('.team-members');
        $teamMembers.slideToggle(300);
    });

    // Prevent the single click from interfering with double click
    let clickTimeout;
    $('.department-header').on('click', function() {
        clickTimeout = setTimeout(() => {
            // Single click action (if needed)
        }, 300);
    });

    $('.department-header').on('dblclick', function() {
        clearTimeout(clickTimeout);
    });
});
