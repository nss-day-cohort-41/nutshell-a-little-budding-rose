console.log("main js page says hello");

import makeChore from './chores/choresList.js';
import API from './events/eventsData.js';
import makeEventList from "./events/eventsList.js"

//Importing Event Files 
// const allEvents = () => {
//     API.getAllEvents()
//         .then((eventsArray) => {
//             console.log("all events", eventsArray)
//         });
//     }        

// allEvents();    

API.getAllEvents ()
    .then(makeEventList)