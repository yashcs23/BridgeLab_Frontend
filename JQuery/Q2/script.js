$(document).ready(function() {
    // Click on product to highlight background
    $('.product').on('click', function() {
        $('.product').removeClass('highlighted');
        $(this).addClass('highlighted');
    });

    // Hover over product to show details
    $('.product').on('mouseenter', function() {
        $(this).find('.product-details').addClass('show');
    }).on('mouseleave', function() {
        $(this).find('.product-details').removeClass('show');
    });

    // Toggle favorite icon
    $('.favorite-btn').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('selected');
    });

    // Check for out of stock products
    $('.product[data-outofstock="true"]').addClass('out-of-stock').on('click', function(e) {
        e.stopPropagation();
        alert('❌ Sorry! This product is out of stock.');
    });

    // Apply discount styles (already handled in CSS with data-discount attribute)
    $('.product[data-discount]').css('position', 'relative');
});
