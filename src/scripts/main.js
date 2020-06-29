import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from './chores/choresList.js';
import messageEventListener from "./messages/messageEvents.js"

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()


import API from './chores/choresComponent.js';

////////////////////////////////////////////////////////

// go get all the data
const allChores = () => {
    // API is an object that has multiple methods for interacting with the DB
    API.getAllChores()
    .then((chores) => {
        // API.getAllChores returns data, in this case an array
        console.log(chores);
    })
}

//invoke the allChores function
// allChores();

//using the makeChore factory function, make a chore object
//id, name, date, completed
const newChore3 = makeChore(3, "Make Dinner", "06-29-20", true);

//invoke the addAChore method and pass it the newChore3 object
API.addAChore(newChore3)
.then(() => {
    //Once the new chore has been added to the database, go get all the data again
    allChores();
});
