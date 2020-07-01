//This module stores the Event listeners 
//*This section was created by Lacey Walker*/


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
        return fetch (`${url}/chores/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedChoreObject)
            })
    },
    deleteChore: (id, updatedChoreObject) => {
        return fetch(`{url}/chores/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    }

}

export default API; 

console.log("chores component working")