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
    },
    deleteJournalEntry: (id) => {
        return fetch(`${url}/users/${id}`, {
            method: "DELETE",
        })
    }
}

// export default usersAPI