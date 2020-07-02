// This module contains event listeners
//*This section was created by Lacey Walker*/

import choresAPI from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';
import updateFormFields from './choresFormField.js';
import makeChoresList from './choresList.js';
import makeChore from './choresData.js'


const choreContainer = document.querySelector("#choreContainer");

export default {
    registerListeners() {

        // deleteChore:() => {
        choreContainer.addEventListener("click", event => {
        
        if (event.target.id.startsWith("deleteChore--")) {
            const choreToDelete = event.target.id.split("--")[1];
            console.log(choreToDelete);

            choresAPI.deleteChore(choreToDelete)
            .then(makeChoresList)

            } else if(event.target.id.startsWith("editChore--")) {
                const choreToEdit = event.target.id.split("--")[1];
                console.log(choretoEdit);

                choresAPI.editChore(choreToBeEdited)
                .then(choreObject => updateFormFields(choreObject));    
            }       
        })}

        // saveChore: () => {
        
      
}


