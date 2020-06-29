//This module contains all fetches to the Events Database
//Created by: Kelley Crittenden

const API = {

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

    editEventEntry:(eventsId) => {
        
    },

        //Function to UPDATE an event when it is edited

    updateForm: (evenstId) => {
        const hiddenEventEntryId = document.querySelector("#eventsId")
        const dateInput = document.querySelector("#eventDate--")
        const nameInput = document.querySelector("#eventName--")
        const locationInput = document.querySelector("#eventLocation--")

        fetch(`http://localhost:8088/events/${eventsId}`)
            .then(response => response.json())
            .then(event => {
                hiddenEventEntryId.value = event.eventsId
                dateInput.value = event.eventDate
                nameInput.value = event.eventName
                locationInput.value = event.eventLocation
             })
        

    },

        //Function to SAVE EDIT entry into the database
    saveEditedEventEntry: (eventsId) => {

    }
}




export default API;