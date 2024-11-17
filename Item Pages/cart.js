// Function to display cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    // Clear existing items in the cart display
    cartItemsContainer.innerHTML = '';

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        
        // Create list item with image and details
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <span>${item.name}</span>
            <span>Quantity: ${item.quantity}</span>
            <span>Price: $${item.price}</span>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

// Call displayCartItems when the page loads
document.addEventListener('DOMContentLoaded', displayCartItems);
