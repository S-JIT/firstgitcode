// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault(); 

    // Get values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Store individual properties directly in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    // Create a user details object
    const userDetails = {
        username: username,
        email: email,
        phone: phone,
    };

    // Store the user details object in local storage
    localStorage.setItem('User Details', JSON.stringify(userDetails));
};

module.exports = handleFormSubmit;
