console.log("main js page says hello");

import makeChore from './chores/choresList.js';


import API from './events/eventsData.js';
import makeEventList from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"

API.getAllEvents ()
    .then(makeEventList)


eventListeners.deleteEventEntry()
eventListeners.editEventEntry()
eventListeners.saveEventEntry()