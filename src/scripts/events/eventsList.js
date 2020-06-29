//
//Created by: Kelley Crittenden


import eventToDOM from "./eventsComponent.js"
import API from "./eventsData.js"


const makeEventList = (API) => {

    const event = document.querySelector(".events")
        //clearing data after delete
    event.innerHTML = ""

    for (const eventObject of API) {

        let eventHTML = eventToDOM.eventHTMLRepresentation(eventObject)

        event.innerHTML += eventHTML

    }
}

export default makeEventList

const makeEventForm = (taco) => {


    for (const eventForm of taco) {

        let eventHTML = eventToDOM.newEventForm(eventForm)

        const event = document.querySelector(".events")

        event.innerHTML += eventHTML
    }
}

export default makeEventForm