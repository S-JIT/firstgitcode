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
}

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

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        // Populate form fields with existing values for editing
        document.getElementById('username').value = userDetails.username;
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
        // Remove user details from the screen
        parentElem.removeChild(childElem);
        // Remove user details from local storage
        localStorage.removeItem(userDetails.email);
    });

    // Display user details, delete button, and edit button
    childElem.textContent = userDetails.username + '-' + userDetails.email + '-' + userDetails.phone;
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

module.exports = handleFormSubmit;
