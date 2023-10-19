const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



if (sign_in_btn){
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
}



const handler = () => {
  const username = document.getElementById('username').value;
  const pass = document.getElementById('pass').value;

  const data = localStorage.getItem(username);

  console.log(pass);

  if (data === null) {
    alert("jhdcvs");
  } else {
    try {
      const parsedData = JSON.parse(data);

      if (parsedData.username === username && parsedData.password === pass) {
        console.log('hi');
        window.open("../index.html", "_self");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
}



if (sign_up_btn) {
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
}

function signup(e){
    event.preventDefault()
    var username = document.getElementById('usernamee').value;
    var email = document.getElementById('emails').value;
    var pass = document.getElementById('passs').value;
    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    const obj = JSON.parse(json)
    localStorage.setItem(username, json)

    var name = obj.username;
    localStorage.setItem("firstLetter", name.charAt(0))
    console.log(localStorage.getItem("firstLetter"))
    // console.log("user saved")
    window.open("../index.html", "_self");
}