//* created by Lacey *

const url = "http://localhost:8088";

const API = {
    getAllChores: () => {
        return fetch(`${url}/chores`)
        .then(response => response.json());
        
    },
    addAChore: (choreObject) => {
        return fetch(`${url}/chores`, {
            method: "POST",
            headers: {
                    "contentType": "application/json"
            },
            body: JSON.stringify(choreObject)
        }).then(response => response.json());
    },
    updateChore: (id) => {
        return fetch (`${url}/chore/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedChoreObject)
            })
    },
    deleteChore: (id, updatedChoreObject) => {
        return fetch(`{url}/chore/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    }

}

export default API; 

console.log("chores component")