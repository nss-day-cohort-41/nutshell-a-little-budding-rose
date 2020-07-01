//* created by Lacey *

import API from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';
import registerListeners from './choresEvents.js'


const choreContainer = document.querySelector("#choreContainer");

const makeChoreList = () => {
    choreContainer.innerHTML = "";
    API.getAllChores()
    .then((choresArray) => {
        const allChoresNames = choresArray.map(item => {
                return item.typeId ===1;
        });
        console.log("all chores list", allChores);
        choreContainer.innerHTML += allChoresNames.join("");

        const firstChore = choreArray.find(item => {
            return item.choreId === 2;
        })
        console.log("man i hope chore list works")

        //loop through the choresArray and display on the dom
		choreArray.forEach(item => {
            choreContainer.innerHTML += makeChoreHTML(item);
        });

        registerListeners.registerListeners();
    })
}

export default makeChoreList;


