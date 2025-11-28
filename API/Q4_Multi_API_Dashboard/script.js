function fetchData() {
    const usersPromise = fetch('db.json')
        .then(res => res.json())
        .then(data => data.users);

    const ordersPromise = fetch('db.json')
        .then(res => res.json())
        .then(data => data.orders);

    const productsPromise = fetch('db.json')
        .then(res => res.json())
        .then(data => data.products);

    Promise.all([usersPromise, ordersPromise, productsPromise])
        .then(([users, orders, products]) => {
            // Hide skeletons and show content
            document.getElementById('usersSkeleton').style.display = 'none';
            document.getElementById('usersContent').style.display = 'block';
            document.getElementById('usersCount').textContent = users.length;

            document.getElementById('ordersSkeleton').style.display = 'none';
            document.getElementById('ordersContent').style.display = 'block';
            document.getElementById('ordersCount').textContent = orders.length;

            document.getElementById('productsSkeleton').style.display = 'none';
            document.getElementById('productsContent').style.display = 'block';
            document.getElementById('productsCount').textContent = products.length;

            // Hide warning if all loaded successfully
            document.getElementById('warningMessage').style.display = 'none';
        })
        .catch(error => {
            console.error('Error loading data:', error);
            
            // Show warning message
            document.getElementById('warningMessage').style.display = 'block';

            // Try to display partial data if available
            setTimeout(() => {
                // Attempt to load whatever data is available
                fetch('db.json')
                    .then(res => res.json())
                    .then(data => {
                        if (data.users) {
                            document.getElementById('usersSkeleton').style.display = 'none';
                            document.getElementById('usersContent').style.display = 'block';
                            document.getElementById('usersCount').textContent = data.users.length;
                        }
                        if (data.orders) {
                            document.getElementById('ordersSkeleton').style.display = 'none';
                            document.getElementById('ordersContent').style.display = 'block';
                            document.getElementById('ordersCount').textContent = data.orders.length;
                        }
                        if (data.products) {
                            document.getElementById('productsSkeleton').style.display = 'none';
                            document.getElementById('productsContent').style.display = 'block';
                            document.getElementById('productsCount').textContent = data.products.length;
                        }
                    });
            }, 500);
        });
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', fetchData);
