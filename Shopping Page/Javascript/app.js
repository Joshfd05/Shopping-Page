document.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    
   const addToCartButtons = document.querySelectorAll('.addCart');

    const cartIcon1 = document.querySelector('.icon-cart'); // Select the cart icon
    const cartIcon = document.querySelector('.icon-cart span'); // Select the cart icon span
    
    const listCart = document.querySelector('.listCart');
    const closeCartButton = document.querySelector('.close');
    const cartTab = document.querySelector('.cartTab');

    const totalPrice = document.querySelector('.total .total-price');
    const checkoutButton = document.getElementById('buy'); // Select the checkout button

    let cart = []; // Array to store cart items


    // Event listener for checkout button
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to the cart before checking out.');
        } 
        else {
            calculateTotalprice();  // Calculate the total price
            window.location.href = "Checkout.html";
        }
    });

    

    // Function to update the cart icon with the number of items
    function updateCartIcon() {
        cartIcon.textContent = cart.length;
    }

    // Function to update the cart display with current cart items
    function updateCart() {
        listCart.innerHTML = ''; // Clear existing cart items
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item'); // Add 'item' class to cart item

            // Populate cart item HTML
            cartItem.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="name">
                    ${item.name}
                </div>
                <div class="totalPrice">
                    Rs ${item.price}
                </div>
                <div class="quantity">
                    <span class="minus" data-index="${index}">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus" data-index="${index}">+</span>
                </div>
            `;
            listCart.appendChild(cartItem); // Append cart item to list
        });

        // Event listeners for minus buttons (decrease quantity)
        document.querySelectorAll('.minus').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index; // Get index from dataset
                if (cart[index].quantity > 1) {
                    cart[index].quantity--; // Decrease quantity
                } else {
                    cart.splice(index, 1); // Remove item if quantity is 1
                }
                updateCartIcon(); // Update cart icon count
                updateCart(); // Update cart display
            });
        });

        // Event listeners for plus buttons (increase quantity)
        document.querySelectorAll('.plus').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index; // Get index from dataset
                cart[index].quantity++; // Increase quantity
                updateCart(); // Update cart display
            });
        });

        // Update total price
        calculateTotalprice();
    }

    // Function to calculate the total price
    function calculateTotalprice() {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity * item.price;
        });
        totalPrice.textContent = `Rs ${total}`;
    }

    // Event listener for 'Add To Cart' buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get relevant information from the clicked item
            const itemElement = button.closest('.item');
            const itemName = itemElement.querySelector('h2').textContent;
            const itemPrice = itemElement.querySelector('.price').textContent.split(' ')[1];
            const itemImage = itemElement.querySelector('img').src;

            // Find if item is already in cart
            const existingItemIndex = cart.findIndex(item => item.name === itemName);

            // If item exists in cart, increase quantity; otherwise, add new item
            if (existingItemIndex >= 0) {
                cart[existingItemIndex].quantity++;
            } 
            else {
                const newItem = {
                    name: itemName,
                    price: itemPrice,
                    image: itemImage,
                    quantity: 1
                };
                cart.push(newItem); // Add new item to cart
            }
            updateCartIcon(); // Update cart icon count
            updateCart(); // Update cart display
        });
    });


    // Click event listener for cart icon to toggle cart visibility
    cartIcon1.addEventListener('click', function() {
        cartTab.classList.toggle('visible');    // Displaying cartTab
        document.body.classList.toggle('showCart'); // Adjusting body for overlay effect
    });

    // Click event listener for close button to hide cart
    closeCartButton.addEventListener('click', function() {
        cartTab.classList.remove('visible'); // Hide cartTab
        document.body.classList.remove('showCart'); // Remove overlay effect from body
    });
});

