//This module stores all the Event listeners for Events 
//Created by: Kelley Crittenden

import API from "./eventsData.js"
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


        //event listener for Edit Button that opens and populates fields with selected event
    editEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if(event.target.id.startsWith("editEventButton--")) {
                //clearEventForm.innerHTML = eventToDOM.newEventForm()
                const eventToEdit = event.target.id.split("--")[1];
                API.getSingleEvent(eventToEdit)
                .then(eventToEdit => eventToDOM.populateEventForm(eventToEdit))
                .then(clearEventForm.innerHTML = eventToDOM.newEventForm())
            }
        })
    }

}

<<<<<<< HEAD
export default eventListeners
=======
export default eventListeners

>>>>>>> master
