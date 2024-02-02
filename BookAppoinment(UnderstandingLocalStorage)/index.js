// Write your code below:
function saveUserDetails(event) {
    event.preventDefault(); 

    // Get values from the form
    const username = event.targrt.username.value;
    const  email = event.targrt.email.value;
    const  phone = event.targrt.phone.value;

    // Store individual properties directly in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  };
module.exports=saveUserDetails(event);