// Initialize an empty cart
let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(name, price) {
    const item = { name, price };
    
    // Check if item is already in cart
    const index = cart.findIndex(cartItem => cartItem.name === name);
    if (index !== -1) {
        // If item exists, update the quantity (not implemented in this example)
        alert(`${name} is already in the cart.`);
    } else {
        // Add new item to cart
        cart.push(item);
        updateCartDisplay();
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    total = 0;
    
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - Rp${item.price}`;
        cartItemsDiv.appendChild(div);
        total += item.price;
    });
    
    document.getElementById('total-price').textContent = `Total: Rp${total}`;
}

// Function to handle the search functionality
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Function to handle the checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Kamu Belum Pesan.');
        return;
    }

    // Example checkout logic
    alert(`Total Pesanan: Rp${total}`);
    
    // Clear the cart
    cart = [];
    updateCartDisplay();
}

// Assuming you have an array of products to search through
const products = [
    { name: 'Nasi Goreng', price: 30000, image: 'images/nasi gor.jpg' },
    { name: 'Ayam Penyet', price: 40000, image: 'images/ayam.jpg' },
    { name: 'Es Teh', price: 10000, image: 'images/teh.jpg' },
    { name: 'Sate Ayam', price: 35000, image: 'images/sate.jpg' },
    { name: 'Mie Ayam', price: 25000, image: 'images/mie.jpg' },
    { name: 'Rendang', price: 50000, image: 'images/renang.jpg' },
    { name: 'Gado Gado', price: 20000, image: 'images/gado.jpg' },
    { name: 'Es Jeruk', price: 12000, image: 'images/jer.jpg' },
    { name: 'Kopi Hitam', price: 15000, image: 'images/kopi.jpg' },
    { name: 'Soda', price: 8000, image: 'images/soda.jpg' },
    { name: 'Jus Melon', price: 14000, image: 'images/melon.jpg' },
    { name: 'Lemon Tea', price: 9000, image: 'images/lemon-tea-selasih.jpg' }
];

// Function to display products based on search results
function displayProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing products
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p>No products found</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: Rp${product.price.toLocaleString()}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Tambah ke Keranjang</button>
        `;
        
        productGrid.appendChild(productElement);
    });
}

// Function to handle the search
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}
