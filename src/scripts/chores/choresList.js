//*This section was created by Lacey Walker*/


import API from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';
import registerListeners from './choresEvents.js'


const choreContainer = document.querySelector("#choreContainer");

const makeChoreList = () => {
    choreContainer.innerHTML = "";
    API.getAllChores()
    .then((choreArray) => {
        const allChoresNames = choreArray.map(item => {
                return item.typeId ===1;
        });
        choreContainer.innerHTML += allChoresNames.join("");

        const firstChore = choreArray.find(item => {
            return item.choreId === 2;
        })

        //loop through the choresArray and display on the dom
		choreArray.forEach(item => {
            choreContainer.innerHTML += makeChoreHTML(item);
        });

        registerListeners.registerListeners();
    })
}

export default makeChoreList;


