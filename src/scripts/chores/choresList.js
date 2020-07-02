// This module contains the make chore list function
//*This section was created by Lacey Walker*/


import choresAPI from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';
import registerListeners from './choresEvents.js'


const choreContainer = document.querySelector("#choreContainer");

const makeChoreList = () => {
    choreContainer.innerHTML = "";
    choresAPI.getAllChores()
    .then((choreArray) => {
        
		choreArray.forEach(item => {
            choreContainer.innerHTML += makeChoreHTML(item);
        });

        registerListeners.registerListeners();
    })
}

export default makeChoreList;


