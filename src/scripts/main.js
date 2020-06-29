import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from './chores/choresList.js';
import messageEventListener from "./messages/messageEvents.js"

<<<<<<< HEAD
import makeChore from './chores/choresList.js';


import API from './events/eventsData.js';
import makeEventList from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"

API.getAllEvents ()
    .then(makeEventList)


eventListeners.deleteEventEntry()
eventListeners.editEventEntry()
eventListeners.saveEventEntry()
=======
messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()
>>>>>>> master
