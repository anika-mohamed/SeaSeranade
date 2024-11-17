function addToCart(name, price, image, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push({ name, price, image, quantity });

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, show a message or update a cart icon
    alert(`${name} has been added to your cart.`);
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');
            const quantity = document.getElementById('quantity').value;

            addToCart(name, price, image, quantity);
        });
    });
});
