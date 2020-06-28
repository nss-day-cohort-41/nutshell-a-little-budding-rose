//This module creates a form to log new event with Save Button Click Listener
//Created By: Kelley Crittenden

//Grabbing saveEventEntry that new entry saves to Event Database
import API from "./eventsData.js"

//creating a target to display form into selected HTML spot
const eventTarget = document.querySelector(".events")

//creating function to produce new event form
const newEventForm = () => {
        //telling function where to send new event in the HTML
    eventTarget.innerHTML += `
        <section id="newEventForm">

            <fieldset>
                <label for="eventDate">Date:</label>
                <input id="eventDate" type="date"/>  
            </fieldset>

            <fieldset>
                <label for="eventName">Name:</label>
                <input id="eventName" type="text"/>
            </fieldset>

            <fieldset>
                <label for="eventLocation">Location:</label>
                <input id="eventLocation" type="text"/>
            </fieldset>

            <button id="saveEventButton">Save Event</button>

        </section>`
    
}

//Click event listener for Save New Event Button, includes window alert to assure all fields are copmleted

//Choosing target in HTML for click event response
eventTarget.addEventListener("click", event => {
    const newEventForm = document.querySelector(".events")
        if(clickEvent.target.id === "saveEventButton") {
            const eventDate = document.querySelector("#eventDate").value 
            const eventName = document.querySelector("#eventName").value 
            const eventLocation = document.querySelector("#eventLocation").value

                //Takes values from click event and creates New Event for Posting
            const newEvent ={
                date: eventDate,
                name: eventName,
                location: eventLocation
            }
                //If fields are not empty then create new event
        if (newEvent.name !== "" && newEvent.location !== "" && newEvent.date !== "") {
                //send newly created event to API using saveEventEntry
            API(saveEventEntry)

             //creates window alert if any fields are left empty
        } else {
        alert("Please Complete All Fields")
        }
    }

})

export default newEventForm