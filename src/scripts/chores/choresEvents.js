import API from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';


const choreContainer = document.querySelector("#choreContainer");

export default {
    registerListener() {
        choreContainer.addEventListener("click", event => {
        console.log("what in the heckaroonie is the event", event.target.id);
        if (event.target.id.startsWith("deleteChore--")) {
            const choreToDelete = event.target.id.split("--")[1];
            console.log(choreToDelete);

            API.deleteChore(choreToDeleted)
            .then(makeChoreList)

            } else if(event.target.id.startsWith("editChore--")) {
                const choreToEdit = event.target.id.split("--")[1];
                console.log(choretoEdit);

                API.editChore(choreToBeEdited)
                .then(makeChoreList)
            }
        })
    }
}