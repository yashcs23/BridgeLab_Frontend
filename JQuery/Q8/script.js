$(document).ready(function() {
    let postCounter = 5;

    // Function to create new post HTML
    function createPostHTML(title, content, postId) {
        return `
            <article class="post" data-post-id="${postId}">
                <div class="post-header">
                    <h2 class="post-title">${title}</h2>
                    <span class="post-number">#${postId}</span>
                </div>
                <div class="post-meta">Posted on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                <p class="post-content">${content}</p>
                <div class="post-tags">
                    <span class="tag">General</span>
                    <span class="tag">Blog</span>
                </div>
                <div class="post-footer">
                    <span class="post-number">Post #${postId}</span>
                    <button class="btn-delete">Delete</button>
                </div>
            </article>
        `;
    }

    // Add new post - append to end
    $('#addPostBtn').on('click', function() {
        const title = $('#postTitle').val().trim();
        const content = $('#postContent').val().trim();

        if (!title || !content) {
            alert('Please enter both title and content');
            return;
        }

        postCounter++;
        const newPost = createPostHTML(title, content, postCounter);

        // Append new post
        $('#postsContainer').append(newPost);

        // Clear inputs
        $('#postTitle').val('');
        $('#postContent').val('');

        attachDeleteEvent();
        updateEmptyState();
    });

    // Prepend featured post
    $('#prependFeaturedBtn').on('click', function() {
        const title = 'Featured: ' + ($('#postTitle').val().trim() || 'Important Announcement');
        const content = $('#postContent').val().trim() || 'This is a featured post!';

        postCounter++;
        const newPost = createPostHTML(title, content, postCounter);

        // Use .before() to add before first post, or prepend if no posts
        if ($('.post').length > 0) {
            $('.post').first().before(newPost);
        } else {
            $('#postsContainer').prepend(newPost);
        }

        // Clear inputs
        $('#postTitle').val('');
        $('#postContent').val('');

        attachDeleteEvent();
        updateEmptyState();
    });

    // Remove last post
    $('#removeLastBtn').on('click', function() {
        const $lastPost = $('.post').last();
        
        if ($lastPost.length === 0) {
            alert('No posts to remove');
            return;
        }

        const title = $lastPost.find('.post-title').text();
        $lastPost.fadeOut(300, function() {
            $(this).remove();
            updateEmptyState();
        });
    });

    // Highlight posts with 'jQuery' keyword
    $('#highlightKeywordBtn').on('click', function() {
        const keyword = 'jQuery';
        let highlightCount = 0;

        $('.post').each(function() {
            const $post = $(this);
            const content = $post.find('.post-content').text().toLowerCase();
            const title = $post.find('.post-title').text().toLowerCase();
            const tags = $post.find('.tag').text().toLowerCase();

            if (content.includes(keyword.toLowerCase()) || 
                title.includes(keyword.toLowerCase()) || 
                tags.includes(keyword.toLowerCase())) {
                $post.addClass('highlighted');
                highlightCount++;
            } else {
                $post.removeClass('highlighted');
            }
        });

        alert(`Highlighted ${highlightCount} posts containing "${keyword}"`);
    });

    // Attach delete event to posts
    function attachDeleteEvent() {
        $('.btn-delete').off('click').on('click', function() {
            const $post = $(this).closest('.post');
            $post.fadeOut(300, function() {
                $(this).remove();
                updateEmptyState();
            });
        });
    }

    // Update empty state
    function updateEmptyState() {
        if ($('.post').length === 0) {
            $('#emptyState').show();
            $('#postsContainer').hide();
        } else {
            $('#emptyState').hide();
            $('#postsContainer').show();
        }
    }

    // Initial attach delete events
    attachDeleteEvent();
    updateEmptyState();

    // Enter key for title input
    $('#postTitle').on('keypress', function(e) {
        if (e.which === 13) {
            $('#addPostBtn').click();
        }
    });
});
