//Christopher McColgan
//This module fetches from the JSON file

const url = "http://localhost:8088"

const usersAPI = {
    getUsers: () => {
        return fetch(`${url}/users`)
            .then(response => response.json())
    },
    getSingleUser: (id) => {
        return fetch(`${url}/users/${id}`)
            .then(response => response.json())
    },
    saveUser: (userObject) => {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
    }
}

export default usersAPI