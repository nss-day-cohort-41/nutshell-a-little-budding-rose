//Module Purpose: turns fetched data into string
//Created By: Kelley Crittenden

//Posting already created events onto the DOM, includes Edit and Delete button event listeners

const eventHTML = (eventObject) => {
    return `<section class="events">
        <h2> Events <h2>
                "name": ${eventObject.name},
                "date": ${eventObject.date},
                "location": ${eventObject.location}
                <button id ="editEvent"--${eventObject.id}">Edit</button>
                <button id ="deleteEvent"--${eventObject.id}">Delete</button>
                
    </section>`


}

export default eventHTML