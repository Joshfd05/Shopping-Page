document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.querySelector('#amount'); // Get the input
    const price = localStorage.getItem('totalPrice'); // Get the price from local storage with the key 'totalPrice'
    userInput.value = price; // Set the value
});

const form = document.querySelector("form"); // Get the form
const userButton = document.querySelector(".submit-btn"); // Get the submit button

form.addEventListener("submit", function(e) { // Add event listener to the form
    e.preventDefault(); // Prevent the default behaviour of the form
    
    let valid = true;
    const firstName = document.querySelector('input[placeholder="Enter your First Name"]'); // Select input for first name using placeholder
    const lastName = document.querySelector('input[placeholder="Enter your Last Name"]');   // Select input for last name using placeholder
    const email = document.querySelector('input[placeholder="Enter your Email"]');  // Select input for email using placeholder
    const phoneNumber = document.querySelector('input[placeholder="Enter your Mobile Number"]');    // Select input for mobile number using placeholder
    const address = document.querySelector('input[placeholder="Enter your Home No, Street"]');  // Select input for address using placeholder
    const city = document.querySelector('input[placeholder="Enter your City"]');    // Select input for city using placeholder
    const cardName = document.querySelector('input[placeholder="Enter your Card Holder\'s Name"]'); // Select input for card belonger's name using placeholder
    const cardNumber = document.querySelector('input[placeholder="Enter your Card Number"]');   // Select input for card number using placeholder
    const expireDate = document.querySelector('input[type="month"]');   // Select input for expirey using placeholder
    const cvv = document.querySelector('input[placeholder="CVV"]'); // Select input for cvv using placeholder

    // Email Validation
    function validateEmail(email) {
        const atPosition = email.indexOf("@");
        const dotPosition = email.lastIndexOf(".");
        return (
            atPosition > 0 &&
            dotPosition > atPosition + 1 &&
            dotPosition < email.length - 1
        );
    }

    // Phone Number Validation
    function validatePhoneNumber(number) {
        return number.length === 10 && !isNaN(number);
    }

    // Card Number Validation
    function validateCardNumber(number) {
        return number.length === 16 && !isNaN(number);
    }

    // CVV Validation
    function validateCVV(cvv) {
        return (cvv.length === 3 || cvv.length === 4) && !isNaN(cvv);
    }

    // Validate First Name
    if (!firstName.value.trim()) {
        alert("First name is required");
        valid = false;
    }

    // Validate Last Name
    if (!lastName.value.trim()) {
        alert("Last name is required");
        valid = false;
    }

    // Validate Email
    if (!email.value.trim() || !validateEmail(email.value)) {
        alert("Valid email is required");
        valid = false;
    }

    // Validate Phone Number
    if (!phoneNumber.value.trim() || !validatePhoneNumber(phoneNumber.value)) {
        alert("Valid 10-digit phone number is required");
        valid = false;
    }

    // Validate Address
    if (!address.value.trim()) {
        alert("Address is required");
        valid = false;
    }

    // Validate City
    if (!city.value.trim()) {
        alert("City is required");
        valid = false;
    }

    // Validate Name on Card
    if (!cardName.value.trim()) {
        alert("Card holder's name is required");
        valid = false;
    }

    // Validate Card Number
    if (!cardNumber.value.trim() || !validateCardNumber(cardNumber.value)) {
        alert("Valid 16-digit card number is required");
        valid = false;
    }

    // Validate Expire Date
    if (!expireDate.value) {
        alert("Expire date is required");
        valid = false;
    }

    // Validate CVV
    if (!cvv.value.trim() || !validateCVV(cvv.value)) {
        alert("Valid CVV is required");
        valid = false;
    }

    if (valid) {
        alert("Thank you for your purchase!"); // Alert the user
        window.location.href = "shop.html"; // Redirect to index.html
    }
});
