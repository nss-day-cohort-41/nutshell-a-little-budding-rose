//This module containts functions that will display to the DOM
//Created By: Kelley Crittenden

import eventsAPI from "./eventsData.js";



const eventToDOM = {

        //Saved Events display on DOM
    eventHTMLRepresentation: (eventObject) => {

        return `<section class="events">
            <span><span class="bold">${eventObject.date}</span> | ${eventObject.name} | <span class="italic">${eventObject.location}</span><span>
            <button type="button" id="editEventButton--${eventObject.id}">Edit</button>
            <button type="button" id="deleteEventButton--${eventObject.id}">Delete</button>
            </section>`
    },

        //creating function to produce new event form
    newEventForm: () => {
        return `
            <form action="" id="eventFormFields">
                <input type="hidden" id="eventUserId" value =""/>
                <input type="hidden" id="hiddenEventEntryId" value=""/>

                <fieldset>
                    <label for="eventDate"></label>
                    <input type="date" id="eventDate" name="eventDate"/>  
                </fieldset>

                <fieldset>
                    <label for="eventName"></label>
                    <input type="text" id="eventName" name="eventName" placeholder="Event name"/>
                </fieldset>

                <fieldset>
                    <label for="eventLocation"></label>
                    <input type="text" id="eventLocation" name="eventLocation" placeholder="Event location"/>
                </fieldset>

            </form>    

            <button id="saveEventButton--">Save</button>`
    },


        //function to populate New Event Form with a previously saved event
    populateEventForm: (eventObject) => {
        const hiddenEventEntryId = document.querySelector("#hiddenEventEntryId");
        const dateInput = document.querySelector("#eventDate");
        const nameInput = document.querySelector("#eventName");
        const locationInput = document.querySelector("#eventLocation");

        hiddenEventEntryId.value = eventObject.id;
        dateInput.value = eventObject.date;
        nameInput.value = eventObject.name;
        locationInput.value = eventObject.location;
    }
}

export default eventToDOM
