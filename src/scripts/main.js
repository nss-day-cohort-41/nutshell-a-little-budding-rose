import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from "./chores/choresData.js"
import makeChoreList from "./chores/choresList.js"
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"
import choresAPI from "./chores/choresComponent.js"
import registerListeners from "./chores/choresEvents.js"

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

const saveChoreButton = document.querySelector("#saveChore")

saveChoreButton.addEventListener("click", event => {
    const hiddenChoreId = document.querySelector("#choreInputId");
    if (hiddenChoreId.vaule !== "") {
        const choreNameInput = document.querySelector("#choreNameInput").value;
        const choreDateInput = document.querySelector("#choreDateInput").value;
        const newChoreObject = makeChore(choreNameInput, choreDateInput)
        choresAPI.addAChore(newChoreObject)
        .then(() => {
            clearInputs();
            makeChoreList();
        });
    } else {
        // save functionality
        console.log("gee i hope this saves")
    }

    const clearInputs = () => {
        document.querySelector("#choreInputId").value = "";
        document.querySelector("#choreNameInput").value = "";
        document.querySelector("#choreDateInput").value = "";
    }
    
})


allChores();
makeChoreList();
registerListeners.registerListeners();



export default renderPage