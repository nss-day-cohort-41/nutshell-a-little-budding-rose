//Christopher McColgan
//This module makes the login and register buttons work

import makeUserComponent from "./usersComponent.js"
import usersAPI from "./usersData.js"
import { newsButtons, showNewsEntries } from "./../news/newsList.js"

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

const clearRegisterInputs = () => {
    registerEmail.value = ""
    registerUsername.value = ""
    registerPassword.value = ""
    registerConfirmPassword.value = ""
}

const userButtons = {
    register: () => {
        document.querySelector("#registerButton").addEventListener("click", clickEvent => {
            const newUserObject = createUserObject(registerEmail.value, registerUsername.value, registerPassword.value)
            if (registerEmail.value === "" || registerPassword.value === "" || registerConfirmPassword.value === "" || registerUsername.value === "") {
                alert("Please complete all fields")
            } else if (registerPassword.value !== registerConfirmPassword.value) {
                alert("Passwords don't match")
            } else {
                usersAPI.saveUser(newUserObject)
                    .then(() => {
                        clearRegisterInputs()
                    })
            }
        })
    },

    logIn: () => {
        document.querySelector("#logInButton").addEventListener("click", clickEvent => {
            if (logInEmail.value === "" || logInPassword.value === "") {
                alert("Please complete all fields")
            } else {
                usersAPI.getUsers()
                    .then(users => users.find(user => {
                        if (user.email == logInEmail.value && user.password === logInPassword.value) {
                            sessionStorage.setItem("activeUser", user.id)
                            sessionStorage.setItem("activeUserUsername", user.username)
                            document.querySelector(".user_info__info").innerHTML = makeUserComponent()
                            document.getElementById("overlay").style.display = "none"
                            console.log(user)
                            showNewsEntries()
                        }
                    }))
            }
        })
    },
    logOut: () => {
        document.querySelector("#logOutButton").addEventListener("click", clickEvent => {
            sessionStorage.removeItem("activeUser")
            sessionStorage.removeItem("activeUserUsername")
            location.reload()
        })
    }
}

export default userButtons