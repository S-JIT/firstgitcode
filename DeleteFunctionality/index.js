// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault(); 

    // Get values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create a user details object
    const userDetails = {
        username: username,
        email: email,
        phone: phone,
    };

    // Store the user details object in local storage
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
  
    showUserOnScreen(userDetails);
  
    function showUserOnScreen(userDetails) {
        const parentElem = document.getElementById('userDetails');
        const childElem = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            // Remove user details from the screen
            parentElem.removeChild(childElem);
            // Remove user details from local storage
            localStorage.removeItem(userDetails.email);
        });

        // Display user details and the delete button
        childElem.textContent = userDetails.username + '-' + userDetails.email + '-' + userDetails.phone;
        childElem.appendChild(deleteButton);
        parentElem.appendChild(childElem);
    }
}

module.exports = handleFormSubmit;