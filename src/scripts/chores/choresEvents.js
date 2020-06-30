import API from './choresComponent.js';
import makeChoreHTML from './choresDOM.js';


const choreContainer = document.querySelector("#choreContainer");

export default {
    registerDeleteListener() {
        choreContainer.addEventListener("click", event.target.id);
        console.log("what in the heckaroonie is the event", event.target.id);
        if (event.target.id.startsWith("deleteChore--")) {
            const choreToDelete = event.target.id.split("--")[1];
            console.log(choreToDelete);

            API.deleteChore(choreToDelete)
            .then(makeChoreList)
        }
    })
}