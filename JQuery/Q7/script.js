$(document).ready(function() {
    const totalCourses = $('.course-card').length;
    $('#totalCount').text(totalCourses);

    // Function to highlight matching text
    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp('(' + query + ')', 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // Search input on keyup
    $('#searchInput').on('keyup', function() {
        const searchQuery = $(this).val().toLowerCase().trim();
        let matchCount = 0;

        $('.course-card').each(function() {
            const title = $(this).data('title').toLowerCase();
            const instructor = $(this).data('instructor').toLowerCase();
            const $titleElement = $(this).find('.course-title');
            const $instructorElement = $(this).find('.course-instructor');

            // Check if search query matches title or instructor
            if (title.includes(searchQuery) || instructor.includes(searchQuery)) {
                $(this).removeClass('hidden').css('display', '');
                matchCount++;

                // Highlight matched text in title
                if (title.includes(searchQuery)) {
                    const originalTitle = $(this).data('title');
                    $titleElement.html(highlightText(originalTitle, searchQuery));
                } else {
                    $titleElement.html($(this).data('title'));
                }

                // Highlight matched text in instructor
                if (instructor.includes(searchQuery)) {
                    const originalInstructor = 'By: ' + $(this).data('instructor');
                    $instructorElement.html(highlightText(originalInstructor, searchQuery));
                } else {
                    $instructorElement.html('By: ' + $(this).data('instructor'));
                }
            } else {
                $(this).addClass('hidden');
                // Reset text without highlight
                $titleElement.html($(this).data('title'));
                $instructorElement.html('By: ' + $(this).data('instructor'));
            }
        });

        // Update count
        $('#matchCount').text(matchCount);

        // Show/hide no results message
        if (matchCount === 0 && searchQuery !== '') {
            $('#noResults').show();
        } else {
            $('#noResults').hide();
        }
    });

    // Clear button
    $('#clearBtn').on('click', function() {
        $('#searchInput').val('').keyup();
        $('#noResults').hide();
    });

    // Show all courses on page load
    $('.course-card').each(function() {
        $(this).find('.course-title').html($(this).data('title'));
        $(this).find('.course-instructor').html('By: ' + $(this).data('instructor'));
    });
});
