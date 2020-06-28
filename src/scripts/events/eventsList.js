//This module produces an Array of the saved events and uses the HTML reprentation to display them into the DOM
//Created by: Kelley Crittenden

//grabbing all the events and delete button function
import API from "./eventsData.js"
import eventHTMLRepresentation from "./events.js"


//creating function to loop through the array of events and place them into the HTML
const makeEventList = (API) => {
//         //telling where to place data in the HTML
//     event.innerHTML = "";
//         //grabbing the API get all events database call
//     API.getAllEvents()
//         //placing them into an Array
//     .then((eventsArray) => {
//             //looping through the created array and selecting each event
//         eventsArray.forEach(event => {
//                 //using that array to populate the DOM by placing the date into the eventHTMLRepresentation     
//             event.innerHTML += eventHTMLRepresentation(event)
//         });
//     })
// }

    for (const eventObject of API) {

        let eventHTML = eventHTMLRepresentation(eventObject)

        const event = document.querySelector(".events")

        event.innerHTML += eventHTML

    }
}


export default makeEventList