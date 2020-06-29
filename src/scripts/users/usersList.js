const logInEmail = document.querySelector("#logInEmailField")
const logInPassword = document.querySelector("#logInPasswordField")

const registerEmail = document.querySelector("#registerEmailField")
const registerUsername = document.querySelector("#registerUsernameField")
const registerPassword = document.querySelector("#registerPasswordField")
const registerConfirmPassword = document.querySelector("#registerConfirmPasswordField")

const createUserObject = (email, username, password) => {
    return {
        email: email,
        username: username,
        password: password
    }
}

document.querySelector("#registerButton").addEventListener("click", clickEvent => { 
    const newUserObject = createUserObject(registerEmail.value, registerUsername.value, registerPassword.value)
    if (registerEmail.value === "" || registerPassword.value === "" || registerConfirmPassword.value === "" || registerUsername.value === "") {
        alert("Please complete all fields") 
    } else if (registerPassword.value !== registerConfirmPassword.value) {
        alert("Passwords don't match")
    } else {
        usersAPI.saveUser(newUserObject)
    }
})


document.querySelector("#logInButton").addEventListener("click", clickEvent => { 
    if (logInEmail.value === "" || logInPassword.value === "") {
        alert("Please complete all fields")
    } else {
        sessionStorage.setItem("email", `${logInEmail.value}`)
        document.querySelector(".user_info").innerHTML = makeUserComponent()
        document.getElementById("overlay").style.display = "none"
    }
})