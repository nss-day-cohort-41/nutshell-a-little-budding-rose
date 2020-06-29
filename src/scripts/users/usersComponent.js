const makeUserComponent = () => {
    const string =
        `Welcome ${sessionStorage.getItem("email")}`
    return string
}