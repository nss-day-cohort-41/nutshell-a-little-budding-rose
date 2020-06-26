//Module Purpose: Creates form to log new event with Save Button Click Listener
//Created By: Kelley Crittenden

import API from "./eventsData.js"

const eventTarget = document.querySelector(".events")

const newEventForm = () => {
    contentTarget.innerHTML += `
        <section id="newEventForm">

            <fieldset>
                <label for="eventDate">Date:</label>
                <input id="eventDate" name="eventDate" type="date"/>  
            </fieldset>

            <fieldset>
                <label for="eventName">Name:</label>
                <input id="eventName" name="eventName" type="text"/>
            </fieldset>

            <fieldset>
                <label for="eventLocation">Location:</label>
                <input id="eventLocation" name="eventLocation" type="text"/>
            </fieldset>

            <button id="saveEventButton">Save New Event</button>

        </section>`
    
}


.addEventListener("click", event => {})
const eventDate = document.querySelector("#eventDate").value 
const eventName = document.querySelector("#eventName").value 
const eventLocation = document.querySelector("#eventLocation").value

if (newEvent.name !== "" && newEvent.location !== "" && newEvent.date !== "") {
    saveEvent(newEvent)
} else {
    alert("Please Complete All Fields")
}

})

export default newEventForm