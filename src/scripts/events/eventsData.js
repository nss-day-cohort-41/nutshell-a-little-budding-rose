//This module contains all fetches to the Events Database
//Created by: Kelley Crittenden

const API = {
//Function to GET ALL the events from the database
    getAllEvents: () => {
        return fetch("http://localhost:8088/events")
        .then((response) => response.json());
    },

//Function to SAVE a new event to the database

    saveEventEntry: (newEventObject) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEventObject)
            })
        },

//Function to DELETE an event from the database

    deleteEventEntry: (eventId) => {
    return fetch("http://localhost:8088/database/${eventId}", {
        method: "DELETE",
    })    
        .then(getAllEvents)

    }
}


export default API;