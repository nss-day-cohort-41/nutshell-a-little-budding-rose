import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from "./chores/choresData.js"
import makeChoreList from "./chores/choresList.js"
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"

userButtons.logIn()
userButtons.register()

showNewsEntries()
newsButtons.save()
newsButtons.deleteEdit()

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()


import API from './chores/choresComponent.js';

////////////////////////////////////////////////////////

const allChores = () => {
    // GET
    API.getAllChores()
    .then((chores) => {
        console.log(chores);
    })
}


allChores();
makeChoreList();
