//
//Created by: Kelley Crittenden


import eventToDOM from "./eventsComponent.js"
import API from "./eventsData.js"


const makeEventList = (API) => {
    for (const eventObject of API) {

        let eventHTML = eventToDOM.eventHTMLRepresentation(eventObject)

        const event = document.querySelector(".events")

        event.innerHTML += eventHTML

    }
}


export default makeEventList
