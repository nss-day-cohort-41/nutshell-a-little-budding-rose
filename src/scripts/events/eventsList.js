//
//Created by: Kelley Crittenden


import eventToDOM from "./eventsComponent.js"
import API from "./eventsData.js"


const makeEventList = (API) => {

    const event = document.querySelector(".events")
        //clearing data
    event.innerHTML = ""

    for (const eventObject of API) {

        let eventHTML = eventToDOM.eventHTMLRepresentation(eventObject)

        event.innerHTML += eventHTML

    }
}

export default makeEventList
