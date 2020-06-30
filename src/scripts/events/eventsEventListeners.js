//This module stores all the button event listeners
//Created by: Kelley Crittenden

import API from "./eventsData.js"
import eventEntryForms from "./eventsList.js"
import eventToDOM from "./eventsComponent.js"


const eventsTarget = document.querySelector(".events")
const eventsFormTarget = document.querySelector(".eventsForm")

const eventListeners = {

        //event listener for New Event Button, opens new event form
    createNewEventEntry: () => {
        eventsFormTarget.addEventListener("click", event => {
            if(event.target.className === "newEventButton") {
                console.log("new event button clicked")
                eventsFormTarget.innerHTML = eventToDOM.newEventForm()
            }
        })
    },  
    
        //event listener for Save Button on new entry
    saveEventEntry: () => {
        eventsFormTarget.addEventListener("click", event => {
            const hiddenEventId = document.querySelector("#entryId")
            if (event.target.id.startsWith("saveEventButton--"))
                //console.log("save event button clicked") 
                if(hiddenEventId.value !== "") {
                    API.saveEventEntry(eventId.value)
                    .then(API.getAllEvents())
                    .then(eventEntryForms.makeEventList())
                }
            
        })
    },


        //event listener for Delete Button
    deleteEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEventButton--")) {
                console.log("delete button clicked")
                const eventToDelete = event.target.id.split("--")[1]
                    console.log("Delete button Clicked", eventToDelete)
                    API.deleteEventEntry(eventToDelete) 
                        .then(()=> {API.getAllEvents()
                            .then((event)=> {eventEntryForms.makeEventList(event)})  
                            })
            }
        })

},   

    updateEventForm: (eventObject) => {
        const hiddenEventEntryId = document.querySelector("#eventsId")
        const dateInput = document.querySelector("#eventDate--")
        const nameInput = document.querySelector("#eventName--")
        const locationInput = document.querySelector("#eventLocation--")


        hiddenEventEntryId.value = eventObject.eventsId;
        dateInput.value = eventObject.eventDate;
        nameInput.value = eventObject.eventName;
        locationInput.value = eventObject.eventLocation;

},

        //event listener for Edit Button
    editEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if(event.target.id.startsWith("editEventButton--")) {
                console.log("Edit Button clicked")
            const eventIdToEdit = event.target.id.split("--")[1]
                console.log("Event to Edit", eventIdToEdit)
            updateEventForm(eventIdToEdit)
        }
    })
},


}

export default eventListeners

