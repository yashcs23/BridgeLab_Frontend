// jQuery v1 reference
var $ = jQuery1 || jQuery;

$(document).ready(function() {
    // ===== jQuery v1: Carousel Slider =====
    const images = ['🏔️', '🏖️', '🌲', '🏜️', '🏝️'];
    let currentSlide = 0;
    let autoPlayInterval;

    function updateCarousel() {
        jQuery1('#carouselImage').fadeOut(300, function() {
            jQuery1(this).text(images[currentSlide]).fadeIn(300);
        });
        jQuery1('#carouselIndicator').text(`Slide ${currentSlide + 1} of ${images.length}`);
    }

    jQuery1('#nextBtn').on('click', function() {
        currentSlide = (currentSlide + 1) % images.length;
        updateCarousel();
    });

    jQuery1('#prevBtn').on('click', function() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateCarousel();
    });

    jQuery1('#autoPlayBtn').on('click', function() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            jQuery1(this).text('Auto Play');
        } else {
            autoPlayInterval = setInterval(function() {
                jQuery1('#nextBtn').click();
            }, 2000);
            jQuery1(this).text('Stop Auto Play');
        }
    });

    // ===== jQuery v1: Highlight Active Widget =====
    jQuery1('#toggleActiveBtn').on('click', function() {
        const $widget = jQuery1(this).closest('.widget');
        $widget.find('.widget-header').toggleClass('active');
        jQuery1('#v1Status').toggleClass('active');
    });

    // ===== jQuery v2: Modal Popup =====
    const $ = jQuery2;

    $('#notificationBtn').on('click', function() {
        $('#notificationModal').addClass('show');
    });

    $('#closeModalBtn').on('click', function() {
        $('#notificationModal').removeClass('show');
    });

    // Close modal when clicking overlay
    $('#notificationModal').on('click', function(e) {
        if (e.target === this) {
            $(this).removeClass('show');
        }
    });

    // ===== jQuery v2: Tooltips on Hover =====
    $('.tooltip-container').on('mouseenter', function() {
        $(this).find('.tooltip').stop(true, true).fadeIn(200);
    }).on('mouseleave', function() {
        $(this).find('.tooltip').stop(true, true).fadeOut(200);
    });

    // ===== Combined: Highlight Active Widget Across Versions =====
    // Ensure v1 widget is marked as active
    jQuery1('.widget').each(function() {
        const title = jQuery1(this).find('.widget-header').text();
        if (title.includes('Carousel')) {
            jQuery1(this).find('.widget-header').addClass('active');
        }
    });

    // Initialize tooltips with jQuery2
    $('.tooltip').hide();
    $('.tooltip-container').hover(function() {
        $(this).find('.tooltip').stop(true, true).fadeIn(200);
    }, function() {
        $(this).find('.tooltip').stop(true, true).fadeOut(200);
    });

    // Display active status
    jQuery1(document).ready(function() {
        console.log('jQuery v1 loaded successfully');
    });

    $(document).ready(function() {
        console.log('jQuery v2 loaded successfully');
    });
});
