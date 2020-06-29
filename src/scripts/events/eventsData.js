//This module contains all fetches to the Events Database
//Created by: Kelley Crittenden

const API = {

            //Function to GET ALL the events from the database
    getAllEvents: () => {
        return fetch("http://localhost:8088/events")
        .then((response) => response.json());
    },

            //Function to SAVE NEW event to the database
    saveEventEntry: (eventObject) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
            })
        },

            //Function to DELETE an event from the database
    deleteEventEntry: (eventId) => {
        return fetch(`http://localhost:8088/database/${eventId}`, {
            method: "DELETE",
            })    
    },

        //Function to UPDATE an event when it is edited

    updateEventEntry: (eventId) => {
        

    },

        //Function to SAVE EDIT entry into the database
    saveEditedEventEntry: (eventId) => {

    }
}




export default API;