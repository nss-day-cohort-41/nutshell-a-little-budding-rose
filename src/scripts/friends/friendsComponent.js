

const friendsComponent = {
    addingFriendInMessages: (userName, userId) => {
        return `<section id="addFriendMessages"><p class="addFriendMessagesText">Would you like to add ${userName} to your friend list?</p>
        <p class="addFriend--${userId}">Add Friend</p><p class="friendsBack">Back</p>
        </section>`
    },

    friendsToTheDOM: (userObject) => {
        return `
        <div class="singleFriendObject">
        <section id="userObjectID--${userObject.id}"> 
        
        <p class="friendUserName">${userObject.username}</p>
        <br>
        <p class="friendUserEmail">${userObject.email}</p>
        
        </section>
        
        </div>`

    }

}

export default friendsComponent