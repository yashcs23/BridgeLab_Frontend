const API_URL = "https://fakestoreapi.com/products";

// Version 1: Using fetch().then()
function fetchProductsWithThen() {
  console.log("Fetching products with .then()...\n");
  
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      console.log("📦 Product Listings:\n");
      // Display first 5 products
      products.slice(0, 5).forEach((product) => {
        console.log(`Product: ${product.title}`);
        console.log(`Price: $${product.price}`);
        console.log(`Image: ${product.image}`);
        console.log("---");
      });
    })
    .catch((error) => {
      console.error("Failed to load products. Please try again.", error);
    });
}

// Version 2: Using async/await (cleaner)
async function fetchProductsWithAsync() {
  try {
    console.log("\nFetching products with async/await...\n");
    
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    
    console.log("📦 Product Listings:\n");
    // Display first 5 products
    products.slice(0, 5).forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("---");
    });
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}

// Call the async version (preferred)
fetchProductsWithAsync();

// Optional: Create HTML product cards (uncomment if running in browser)
/*
async function displayProductCards() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    
    const container = document.getElementById("products") || 
                      (() => {
                        const div = document.createElement("div");
                        div.id = "products";
                        document.body.appendChild(div);
                        return div;
                      })();
    
    products.slice(0, 5).forEach((product) => {
      const card = document.createElement("div");
      card.style.cssText = "border: 1px solid #ccc; padding: 10px; margin: 10px; max-width: 200px;";
      
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
      `;
      
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load products.", error);
  }
}

displayProductCards();
*/
