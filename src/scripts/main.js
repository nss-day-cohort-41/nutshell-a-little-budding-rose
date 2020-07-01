import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from "./chores/choresData.js"
import makeChoreList from "./chores/choresList.js"
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"
import choresAPI from "./chores/choresComponent.js"

const renderPage = () => {
    showNewsEntries()
    
    messagesAPI.messagesGetData()
    .then(() => {
        messageList();
    })
    API.getAllEvents ()
        .then(eventEntryForms.makeEventList)
}

userButtons.logIn()
userButtons.register()
userButtons.logOut()

newsButtons.save()
newsButtons.deleteEdit()

messageEventListener()

import API from './events/eventsData.js';
import eventEntryForms from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"



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
    document.querySelector("#id").value = "";
    document.querySelector("#choreName").value = "";
    document.querySelector("#choreDate").value = "";
    document.querySelector("#choreCompleted").value = "";

}

const saveChoreButton = document.querySelector("#saveChore")

saveChoreButton.addEventListener("click", event => {
    const hiddenChoreId = document.querySelector("id");

    if (hiddenChoreId.vaule !== "") {
        const choreNameInput = document.querySelector("choreName").value;
        const choreDateInput = document.querySelector("choreDate").value;
        const choreCompleteInput = document.querySelector("choreComplete").value;
        //name, date, completed
        API.updateChore(hiddenChoreId.value, makeChore(choreNameInput, choreDateInput, choreCompleteInput))
        .then(() => {
            clearInputs();
            makeChoreList();
        });
    } else {
        // save functionality
        console.log("gee i hope this saves")
    }
})

export default renderPage