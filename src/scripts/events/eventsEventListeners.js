//This module stores all the Event listeners for Events 
//Created by: Kelley Crittenden

import eventsAPI from "./eventsData.js"
import eventEntryForms from "./eventsList.js"
import eventToDOM from "./eventsComponent.js"


const eventsTarget = document.querySelector(".events")
const eventsFormTarget = document.querySelector(".eventsForm")
const clearEventForm = document.querySelector(".newEventSection")

const eventListeners = {


        //event listener for New Event Button, opens new event form then closes it when saved
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
                const eventIdVal = document.querySelector("#hiddenEventEntryId").value
                const eventDate = document.querySelector("#eventDate").value 
                const eventName = document.querySelector("#eventName").value 
                const eventLocation = document.querySelector("#eventLocation").value
                const eventUserId = sessionStorage.getItem("activeUser")
                const newEvent = {
                    userId: eventUserId,
                    date: eventDate,
                    name: eventName,
                    location: eventLocation
                }
                if (newEvent.date === "" || newEvent.name === "" || newEvent.location === "") {
                    alert("Please complete all fields.")
                    } else if (eventIdVal !== "") {
                        eventsAPI.editEvent(eventIdVal, newEvent)
                        .then(()=> {eventsAPI.getAllEvents()
                            .then((event)=> {
                                eventEntryForms.makeEventList(event)
                                clearEventForm.innerHTML = ""})  
                            })
                } else {
                    eventsAPI.saveEventEntry(newEvent)
                    .then(()=> {eventsAPI.getAllEvents()
                        .then((event)=> {
                            eventEntryForms.makeEventList(event)
                            clearEventForm.innerHTML = ""})  
                })
   
            }
        }})
    },

        //event listener for Delete Button
    deleteEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEventButton--")) {
                const eventToDelete = event.target.id.split("--")[1]
                    eventsAPI.deleteEventEntry(eventToDelete) 
                        .then(()=> {eventsAPI.getAllEvents()
                            .then((event)=> {eventEntryForms.makeEventList(event)})  
                            })
            }
        })

},   


        //event listener for Edit Button that opens and populates fields with selected event
    editEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if(event.target.id.startsWith("editEventButton--")) {
                //clearEventForm.innerHTML = eventToDOM.newEventForm()
                const eventToEdit = event.target.id.split("--")[1];
                eventsAPI.getSingleEvent(eventToEdit)
                .then(eventToEdit => eventToDOM.populateEventForm(eventToEdit))
                .then(clearEventForm.innerHTML = eventToDOM.newEventForm())
            }
        })
    }

}

export default eventListeners