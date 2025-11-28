$(document).ready(function() {
    const searchBox = $('#searchBox');
    const resultsContainer = $('#resultsContainer');
    const loadingIndicator = $('#loadingIndicator');

    searchBox.on('input', function() {
        const query = $(this).val().trim();
        
        if (query === '') {
            resultsContainer.html('');
            loadingIndicator.removeClass('active');
            return;
        }

        // Show loading indicator
        loadingIndicator.addClass('active');

        // Send AJAX GET request
        $.ajax({
            url: 'db.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                loadingIndicator.removeClass('active');
                
                // Filter products based on query
                const filteredProducts = data.products.filter(product => 
                    product.name.toLowerCase().includes(query.toLowerCase())
                );

                // Display results
                if (filteredProducts.length === 0) {
                    resultsContainer.html(`
                        <div class="no-results">
                            <div class="no-results-icon">🔍</div>
                            <p>No products found</p>
                        </div>
                    `);
                } else {
                    let html = '';
                    filteredProducts.forEach(product => {
                        html += `
                            <div class="product-card">
                                <img src="${product.image}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <div class="price">$${product.price.toFixed(2)}</div>
                            </div>
                        `;
                    });
                    resultsContainer.html(html);
                }
            },
            error: function() {
                loadingIndicator.removeClass('active');
                resultsContainer.html(`
                    <div class="no-results">
                        <div class="no-results-icon">❌</div>
                        <p>Error loading products</p>
                    </div>
                `);
            }
        });
    });
});
