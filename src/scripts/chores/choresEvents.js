// This module contains event listeners
//*This section was created by Lacey Walker*/

import choresAPI from './choresComponent.js';
import updateFormFields from './choresFormField.js';
import makeChoreList from './choresList.js'


const choreContainer = document.querySelector("#choreContainer");

export default {
    registerListeners() {

        choreContainer.addEventListener("click", event => {
        
        if (event.target.id.startsWith("deleteChore--")) {
            const choreToDelete = event.target.id.split("--")[1];
            console.log(choreToDelete);

            choresAPI.deleteChore(choreToDelete)
            .then(makeChoreList)

            } else if(event.target.id.startsWith("editChore--")) {
                const choreToEdit = event.target.id.split("--")[1];
                console.log(choreToEdit);

                choresAPI.editChore(choreToEdit)
                .then(choreToEdit => updateFormFields(choreToEdit));    
            }       
        })}
}


