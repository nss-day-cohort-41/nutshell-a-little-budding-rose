//This module containts functions that will display to the DOM
//*This section was created by Lacey Walker*/

const makeChoreHTML = ( choreObject ) => {
    const domElement = `<section class="chores">
    <h2 id="title--${choreObject.id}"}">${choreObject.choreName}</h2>
    <p>${choreObject.choreDate}</p>
    <p>${choreObject.choreComplete}</p>
    <button type="button" id="deleteChore--${choreObject.id}">Delete</button>
    <button type="button" id="editChore--${choreObject.id}">Edit</button>
    </section>
    `
    return domElement
}

export default makeChoreHTML;

