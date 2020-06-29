//This module stores all the button event listeners
//Created by: Kelley Crittenden

import API from "./eventsData.js"
import makeEventList from "./eventsList.js"

const eventsTarget = document.querySelector(".events")

const eventListeners = {


        //event listener for save button
    saveEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            const hiddenEventId = document.querySelector("#entryId")
                //console.log("hidden id", hiddenEventId.value)
            if (event.target.id.startsWith("saveEventButton--")) 
                if(hiddenEventId.value !== "") {
                    API.saveEventEntry(eventId.value)
                    .then(API.getAllEvents())
                    .then(makeEventList)
                }
            
        })
    },


        //event listener for delete button
    deleteEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEventButton--")) {
                console.log("delete button clicked")
                const eventToDelete = event.target.id.split("--")[1]
                    console.log("Delete button Clicked", eventToDelete)
                    API.deleteEventEntry(eventToDelete) 
                        .then(()=> {API.getAllEvents()
                            .then((taco)=> {makeEventList(taco)})  
                            })
            }
        })

},   

        //event listener for edit button
    editEventEntry: () => {
        eventsTarget.addEventListener("click", event => {
            if(event.target.id.startsWith("editEventButton--")) {
                console.log("Edit Button clicked")
            const eventIdToEdit = event.target.id.split("--")[1]
                console.log("Event to Edit", eventIdToEdit)
            API.updateEventForm(eventIdToEdit)
        }
    })
}
}

export default eventListeners

