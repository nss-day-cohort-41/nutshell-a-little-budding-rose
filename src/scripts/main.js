import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from './chores/choresList.js';
import messageEventListener from "./messages/messageEvents.js"

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()

import API from './events/eventsData.js';
import eventEntryForms from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"

API.getAllEvents ()
    .then(eventEntryForms.makeEventList)


eventListeners.deleteEventEntry()
eventListeners.editEventEntry()
eventListeners.saveEventEntry()
eventListeners.createNewEventEntry()