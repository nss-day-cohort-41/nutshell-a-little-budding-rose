//This module contains all fetches to the Events Database
//Created by: Kelley Crittenden

const eventsAPI = {

            //Function to GET ALL the events from the database
    getAllEvents: () => {
        return fetch("http://localhost:8088/events")
        .then((response) => response.json());
    },
            //Function 

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
    deleteEventEntry: (eventsId) => {
        return fetch(`http://localhost:8088/events/${eventsId}`, {
            method: "DELETE",
            }).then((response) => response.json());
    },


            //Function to get a single event for editing
    getSingleEvent: (eventsId) => {
        return fetch(`http://localhost:8088/events/${eventsId}`)
                .then(response => response.json());
    },

}

export default eventsAPI;