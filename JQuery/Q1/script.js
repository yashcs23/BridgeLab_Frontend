$(document).ready(function() {
    // Get time of day and display personalized greeting
    function getTimeGreeting() {
        const hours = new Date().getHours();
        let greeting = '';

        if (hours < 12) {
            greeting = '☀️ Good Morning!';
        } else if (hours < 18) {
            greeting = '🌤️ Good Afternoon!';
        } else {
            greeting = '🌙 Good Evening!';
        }

        return greeting;
    }

    // Array of motivational quotes
    const quotes = [
        '🚀 You are capable of amazing things!',
        '💪 Believe in yourself!',
        '🌟 Every day is a new opportunity!',
        '✨ You are awesome!',
        '🎯 Keep pushing forward!'
    ];

    let currentQuoteIndex = 0;

    // Display initial greeting on page load
    $('#greeting').text(getTimeGreeting());

    // Change greeting to motivational quote
    $('#changeGreeting').on('click', function() {
        const quote = quotes[currentQuoteIndex];
        $('#greeting').text(quote);
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    });

    // Toggle welcome message visibility
    $('#toggleMessage').on('click', function() {
        $('#welcomeMessage').toggleClass('show');
    });

    // Show alert when greeting is clicked
    $('#greeting').on('click', function() {
        alert('You clicked the greeting! Current greeting: ' + $(this).text());
    });
});
