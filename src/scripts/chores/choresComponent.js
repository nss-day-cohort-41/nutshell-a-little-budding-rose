//This module stores the Event listeners 
//*This section was created by Lacey Walker*/


const url = "http://localhost:8088";

const choresAPI = {
    getAllChores: () => {
        return fetch(`${url}/chores`)
        .then(response => response.json());
        
    },
    addAChore: (choreObject) => {
        console.log(choreObject)
        return fetch(`${url}/chores`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(choreObject)
        }).then(response => response.json());
    },
    
    getSingleChore: (id) => {
        return fetch(`${url}/chores/${id}`)
            .then(response => response.json())
    },

    editChore: (id, updatedChoreObject) => {
        return fetch (`${url}/chores/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedChoreObject)
            })
    },
    deleteChore: (id) => {
        return fetch(`${url}/chores/${id}`, {
            method: "DELETE"
        })
    }

}

export default choresAPI; 


