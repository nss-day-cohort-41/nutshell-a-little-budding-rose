import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})