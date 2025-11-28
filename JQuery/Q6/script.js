$(document).ready(function() {
    // Function to show success message
    function showSuccess(message) {
        $('#successMessage').text(message).addClass('show');
        setTimeout(function() {
            $('#successMessage').removeClass('show');
        }, 3000);
    }

    // Function to update statistics
    function updateStats() {
        const total = $('.subscription-item').length;
        const active = $('.subscription-item').not('.disabled').length;
        const inactive = $('.subscription-item.disabled').length;
        
        $('#totalCount').text(total);
        $('#activeCount').text(active);
        $('#inactiveCount').text(inactive);
    }

    // Subscribe button click
    $(document).on('click', '.btn-subscribe', function() {
        const $item = $(this).closest('.subscription-item');
        const topicName = $item.find('.subscription-name').text();
        
        $item.removeClass('disabled');
        $item.find('.notification-badge').text('✓').addClass('active');
        $(this).text('Unsubscribe').removeClass('btn-subscribe').addClass('btn-unsubscribe');
        
        showSuccess('✅ Subscribed to ' + topicName + '!');
        updateStats();
    });

    // Unsubscribe button click
    $(document).on('click', '.btn-unsubscribe', function() {
        const $item = $(this).closest('.subscription-item');
        const topicName = $item.find('.subscription-name').text();
        
        $item.addClass('disabled');
        $item.find('.notification-badge').text('✗').removeClass('active');
        $(this).text('Subscribe').removeClass('btn-unsubscribe').addClass('btn-subscribe');
        
        showSuccess('❌ Unsubscribed from ' + topicName);
        updateStats();
    });

    // Add new subscription topic with .on() for dynamic events
    $('#addTopicBtn').on('click', function() {
        const topicName = $('#newTopicInput').val().trim();
        
        if (topicName === '') {
            alert('Please enter a topic name');
            return;
        }

        // Create new subscription item
        const newItem = `
            <div class="subscription-item" data-subscription="${topicName}">
                <span class="subscription-name">📌 ${topicName}</span>
                <div class="sub-actions">
                    <span class="notification-badge active">✓</span>
                    <button class="btn-unsubscribe">Unsubscribe</button>
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        `;

        // Append new item
        $('#subscriptionList').append(newItem);
        
        // Attach .on() click event to the new item's remove button
        attachRemoveEvent($('#subscriptionList').find('[data-subscription="' + topicName + '"] .btn-remove'));
        
        // Clear input
        $('#newTopicInput').val('');
        
        showSuccess('✅ New topic "' + topicName + '" added!');
        updateStats();
    });

    // Function to attach remove event with .off() and .on()
    function attachRemoveEvent($button) {
        $button.off('click').on('click', function(e) {
            e.stopPropagation();
            const $item = $(this).closest('.subscription-item');
            const topicName = $item.find('.subscription-name').text();
            
            if (confirm('Remove this subscription topic?')) {
                $item.fadeOut(300, function() {
                    $(this).remove();
                    showSuccess('🗑️ Removed: ' + topicName);
                    updateStats();
                });
            }
        });
    }

    // Remove subscription (with dynamic event handling)
    $(document).on('click', '.btn-remove', function(e) {
        e.stopPropagation();
        const $item = $(this).closest('.subscription-item');
        const topicName = $item.find('.subscription-name').text();
        
        if (confirm('Remove this subscription topic?')) {
            $item.fadeOut(300, function() {
                $(this).remove();
                showSuccess('🗑️ Removed: ' + topicName);
                updateStats();
            });
        }
    });

    // Enter key to add new topic
    $('#newTopicInput').on('keypress', function(e) {
        if (e.which === 13) {
            $('#addTopicBtn').click();
        }
    });

    // Initialize statistics on page load
    updateStats();
});
