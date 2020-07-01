//This module containts functions that will display to the DOM
//Created By: Kelley Crittenden


const eventToDOM = {
        //Saved Events
    eventHTMLRepresentation: (eventObject) => {
        return `<section class="events">
            <div class="date">Date: ${eventObject.date}</div>
            <div class="name">Name: ${eventObject.name}</div>
            <div class ="location">Location: ${eventObject.location}</div><br> 
            <button id ="editEventButton--${eventObject.id}">Edit</button>
            <button id ="deleteEventButton--${eventObject.id}">Delete</button>
            </section>`
    },



            //creating function to produce new event form
    newEventForm: () => {
        return `
            <form action="" id="eventFormFields">

                <input type="hidden" id="hiddenEventEntryId" value=""/>

                <fieldset>
                    <label for="eventDate">Date:</label>
                    <input type="date" id="eventDate" name="eventDate"/>  
                </fieldset>

                <fieldset>
                    <label for="eventName">Name:</label>
                    <input type="text" id="eventName" name="eventName"/>
                </fieldset>

                <fieldset>
                    <label for="eventLocation">Location:</label>
                    <input type="text" id="eventLocation" name="eventLocation"/>
                </fieldset>

            </form>    

            <button id="saveEventButton--">Save Event</button>`
    },


        //function to populate New Event Form with a previously saved event
    populateEventForm: (eventObject) => {
        const hiddenEventEntryId = document.querySelector("#hiddenEventEntryId");
        const dateInput = document.querySelector("#eventDate");
        const nameInput = document.querySelector("#eventName");
        const locationInput = document.querySelector("#eventLocation");

        hiddenEventEntryId.value = eventObject.hiddenEventEntryId;
        dateInput.value = eventObject.date;
        nameInput.value = eventObject.name;
        locationInput.value = eventObject.location;
    }
}

export default eventToDOM