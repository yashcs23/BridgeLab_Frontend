$(document).ready(function() {
    // Click on question to toggle answer visibility
    $('.faq-question').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.faq-answer').toggleClass('show');
    });

    // Hover over question to change color
    $('.faq-question').on('mouseenter', function() {
        $(this).css('padding-left', '30px');
    }).on('mouseleave', function() {
        if (!$(this).hasClass('active')) {
            $(this).css('padding-left', '20px');
        }
    });

    // Double-click to collapse all answers
    $(document).on('dblclick', '.faq-question', function() {
        $('.faq-question').removeClass('active');
        $('.faq-answer').removeClass('show');
    });

    // Collapse all button
    $('#collapseAll').on('click', function() {
        $('.faq-question').removeClass('active');
        $('.faq-answer').removeClass('show');
    });

    // Focus on input to highlight parent question
    $('input[type="text"]').on('focus', function() {
        const $answer = $(this).closest('.faq-answer');
        const $question = $answer.prev('.faq-question');
        $question.addClass('highlight-question');
    });

    // Blur from input to reset background
    $('input[type="text"]').on('blur', function() {
        const $answer = $(this).closest('.faq-answer');
        const $question = $answer.prev('.faq-question');
        $question.removeClass('highlight-question');
    });
});
