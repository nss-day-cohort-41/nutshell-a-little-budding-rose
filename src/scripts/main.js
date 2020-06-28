console.log("main js page says hello");

import makeChore from './chores/choresList.js';
import API from './chores/choresComponent.js';

const allChores = () => {
    API.getAllChores()
    .then((chores) => {
        console.log(chores);
    })
}

allChores();