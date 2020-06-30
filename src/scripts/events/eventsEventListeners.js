//This module stores all the button event listeners
//Created by: Kelley Crittenden

import API from "./eventsData.js"
import eventEntryForms from "./eventsList.js"
import eventToDOM from "./eventsComponent.js"


const eventsTarget = document.querySelector(".events")
const eventsFormTarget = document.querySelector(".eventsForm")
const clearEventForm = document.querySelector(".newEventSection")

const eventListeners = {

        //event listener for New Event Button, opens new event form
    createNewEventEntry: () => {
        eventsFormTarget.addEventListener("click", event => {
            if(event.target.className === "newEventButton") {
                clearEventForm.innerHTML = eventToDOM.newEventForm()
            }
        })
    },  
    
        //event listener for Save Button on new entry
    saveEventEntry: () => {
        eventsFormTarget.addEventListener("click", event => {
            if (event.target.id.startsWith("saveEventButton--")) { 
                const eventDate = document.querySelector("#eventDate").value 
                const eventName = document.querySelector("#eventName").value 
                const eventLocation = document.querySelector("#eventLocation").value 
                const newEvent = {
                    date: eventDate,
                    name: eventName,
                    location: eventLocation
                }
                if (newEvent.date !== "" && newEvent.name !== "" && newEvent.location !== "") {
                    API.saveEventEntry(newEvent)
                    .then(()=> {API.getAllEvents()
                        .then((event)=> {
                            eventEntryForms.makeEventList(event)
                            console.log("TEST")
                            clearEventForm.innerHTML = ""})  
                        })
                } else {
                    alert("Please complete all fields.")
                }
   
            }
        })
    },

        //event listener for Delete Button
    deleteEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEventButton--")) {
                const eventToDelete = event.target.id.split("--")[1]
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

