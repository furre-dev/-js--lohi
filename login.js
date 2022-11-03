const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");

const eyeImage = document.querySelector(".eye-image");

const loginBtn = document.querySelector(".login-btn");

eyeImage.addEventListener("click", function () {
    passwordInput.classList.toggle("password");
    if (!passwordInput.classList.contains("password")) {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
})

//Will trigger login function if loginBtn is clicked
loginBtn.addEventListener("click", login)
//Will trigger event function when any key is pressed while passwordInput is selected
passwordInput.addEventListener("keypress", function (event) {

    //if the pressed key is "ENTER", trigger login function
    if (event.key === "Enter") {
        login();
    }
})

//will check if correctUsernameAndPassword is true, and redirect to site if true
function login() {
    //redirect to lofi site if correct username and pw is given
    if (correctUsernameAndPassword() == true) {
        location.href = "lohi.html";
        return;

        //will give error alert if username and pw is incorrect
    } else {
        alert("WRONG USERNAME OR PASSWORD!");
        return;
    }
}

//Check the values of input and return "ture" if the correct username and password
//is given. Else it will return false.
function correctUsernameAndPassword() {
    if ((usernameInput.value == "furre") && (passwordInput.value == "furre")) {
        return true;
    } else {
        return false;
    }
}