//This Module turns fetched data into string so that it can be used in HTML
//Created By: Kelley Crittenden

//Posting already created events onto the DOM, includes Edit and Delete button event listeners

//Importing getAllEvents fetch call to database
import API from "./eventsData.js"

const eventHTMLRepresentation = (eventObject) => {
    return `<section class="events">
                Date: ${eventObject.date}<br>
                Name: ${eventObject.name}<br>
                Location: ${eventObject.location}<br>
                <button id ="editEventButton"--${eventObject.id}">Edit</button>
                <button id ="deleteEventButton"--${eventObject.id}">Delete</button>
                
    </section>`


}

export default eventHTMLRepresentation