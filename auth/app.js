// Selecting DOM elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Event listener for switching to sign-up mode
if (sign_in_btn) {
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
}

// Event listener for switching to sign-in mode
if (sign_up_btn) {
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
}

// Function to handle sign-in
const handler = () => {
  // Get values from input fields
  const username = document.getElementById('username').value; //selection the username feild and . value for its value
  const pass = document.getElementById('pass').value;

  // Retrieve user data from localStorage
  const data = localStorage.getItem(username); // if data is present in local storage

  // Log the password for debugging
  console.log(pass);

  if (data === null) {
    alert("User not found please Sign-Up");
  }
  else {
    try {
      // Parse the stored user data as JSON
      const parsedData = JSON.parse(data);

      if (parsedData.username === username && parsedData.password === pass) {
        console.log('Sign in successful');
        window.open("../index.html", "_self");
      } else {
        alert("Invalid username or password");
      }
    }
    catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
}

// Function to handle user sign-up
function signup(e) {
  event.preventDefault();
  // Get user input values
  var username = document.getElementById('usernamee').value;
  var email = document.getElementById('emails').value;
  var pass = document.getElementById('passs').value;
  
  // Create a user object
  var user = {
    email: email,
    username: username,
    password: pass,
  };

  // Convert user object to JSON
  var json = JSON.stringify(user); //JSON.stringify() method is used to convert the user object into a JSON-formatted string. This is necessary because the localStorage
  const obj = JSON.parse(json);

  // Store user data in localStorage
  localStorage.setItem(username, json);

  // Store the first letter of the username
  var name = obj.username;
  localStorage.setItem("firstLetter", name.charAt(0));

  // Log the first letter (for debugging)
  console.log(localStorage.getItem("firstLetter"));

  // Open the index.html page
  window.open("../index.html", "_self");
}
