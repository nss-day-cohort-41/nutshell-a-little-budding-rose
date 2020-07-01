import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from "./chores/choresData.js"
import makeChoreList from "./chores/choresList.js"
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"
import choresAPI from "./chores/choresComponent.js"

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

import API from './events/eventsData.js';
import eventEntryForms from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"

API.getAllEvents ()
    .then(eventEntryForms.makeEventList)


eventListeners.deleteEventEntry()
eventListeners.editEventEntry()
eventListeners.saveEventEntry()
eventListeners.createNewEventEntry()



////////////////////////////////////////////////////////

const allChores = () => {
    // GET
    choresAPI.getAllChores()
    .then((chores) => {
        console.log(chores);
    })
}


allChores();
makeChoreList();

const clearInputs = () => {
    document.querySelector("#choresInputId").value = "";
    document.querySelector("#choreNameInput").value = "";
    document.querySelector("#choreDateInput").value = "";
}

const saveChoreButton = document.querySelector("#saveChore")

saveChoreButton.addEventListener("click", event => {
    const hiddenChoreId = document.querySelector("#choresInputId");

    if (hiddenChoreId.vaule !== "") {
        const choreNameInput = document.querySelector("#choreNameInput").value;
        const choreDateInput = document.querySelector("#choreDateInput").value;
        //name, date, completed
        choresAPI.addAChore(makeChore(choreNameInput, choreDateInput))
        .then(() => {
            clearInputs();
            makeChoreList();
        });
    } else {
        // save functionality
        console.log("gee i hope this saves")
    }
})