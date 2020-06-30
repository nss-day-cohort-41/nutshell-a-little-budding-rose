//Christopher McColgan
//This module contains the HTML that will be rendered to the DOM

const makeUserComponent = () => {
    const string =
        `Welcome, ${sessionStorage.getItem("username")}!`
    return string
}

export default makeUserComponent