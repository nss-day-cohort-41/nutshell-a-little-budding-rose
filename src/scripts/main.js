import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from './chores/choresList.js';
import messageEventListener from "./messages/messageEvents.js"

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()