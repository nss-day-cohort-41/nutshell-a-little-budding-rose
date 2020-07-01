// This module renders to the DOM
//Created by: Kelley Crittenden


import eventToDOM from "./eventsComponent.js"

const eventEntryForms = {

    makeEventList: (API) => {

        const events = document.querySelector(".events")
        //clearing data after delete
        events.innerHTML = ""

    for (const eventObject of API) {

        let eventHTML = eventToDOM.eventHTMLRepresentation(eventObject)

        events.innerHTML += eventHTML

    }
},


    makeEventForm: () => {

        for (const eventForm of event) {

            let eventsForm = eventToDOM.newEventForm(eventForm)

            const eventForm = document.querySelector(".newEventSection")

        eventsForm.innerHTML += eventHTML
    }
    }
}

export default eventEntryForms