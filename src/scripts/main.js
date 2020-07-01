import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from './chores/choresList.js';
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"

userButtons.logIn()
userButtons.register()
userButtons.logOut()

newsButtons.save()
newsButtons.deleteEdit()

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()