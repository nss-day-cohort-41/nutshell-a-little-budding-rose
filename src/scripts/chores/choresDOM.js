//This module containts functions that will display to the DOM
//*This section was created by Lacey Walker*/

const makeChoreHTML = ( choreObject ) => {
    const domElement = 
    `<section class="chores">
        <hr>
        <span class="bold">${choreObject.choreDate}</span>
        <br><span id="title--${choreObject.id}"}">${choreObject.choreName}</span>
        <br><span>In progress? </span>${choreObject.choreComplete}
        <br><button type="button" id="editChore--${choreObject.id}">Edit</button>
        <button type="button" id="deleteChore--${choreObject.id}">Delete</button>
    </section>
    `
    return domElement
}

export default makeChoreHTML;
