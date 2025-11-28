$(document).ready(function() {
    let rotationInterval;
    let currentBannerIndex = 0;

    // Hide button - hide all banners
    $('#hideBtn').on('click', function() {
        $('.banner').hide();
    });

    // Show button - show all banners
    $('#showBtn').on('click', function() {
        $('.banner').show();
    });

    // Slide Up - toggle slide animation
    $('#slideUpBtn').on('click', function() {
        $('.banner').slideUp(500);
    });

    // Slide Down - toggle slide animation
    $('#slideDownBtn').on('click', function() {
        $('.banner').slideDown(500);
    });

    // Fade In - fade in all banners
    $('#fadeInBtn').on('click', function() {
        $('.banner').fadeIn(500);
    });

    // Fade Out - fade out all banners
    $('#fadeOutBtn').on('click', function() {
        $('.banner').fadeOut(500);
    });

    // Auto-rotate banners every 5 seconds using fadeIn/fadeOut
    function startRotation() {
        const $banners = $('.banner');
        
        // Clear previous interval if exists
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }

        rotationInterval = setInterval(function() {
            // Fade out current banner
            $banners.eq(currentBannerIndex).fadeOut(500, function() {
                $(this).css('display', 'flex').hide();
            });

            // Move to next banner
            currentBannerIndex = (currentBannerIndex + 1) % $banners.length;

            // Fade in next banner
            $banners.eq(currentBannerIndex).fadeIn(500);
        }, 5000);
    }

    // Start rotation on page load
    startRotation();

    // Restart rotation when show/hide buttons are clicked
    $('#showBtn').on('click', function() {
        currentBannerIndex = 0;
        startRotation();
    });
});
