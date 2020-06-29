//*created by lacey*/

const makeChoreHTML = ( choreObject ) => {
    const domElement = `<section class="chores">
    <h2 id="title--${choreObject.id}"}">${choreObject.choreName}</h2>
    <p>${choreObject.choreDate}</p>
    <p>${choreObject.choreComplete}</p>
    <button id="deleteChore--${choreObject.id}">Delete</button>
    </section>
    `
    return domElement
}

export default makeChoreHTML:

consol.log("tacos suck")