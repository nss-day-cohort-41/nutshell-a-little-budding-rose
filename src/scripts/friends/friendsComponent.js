

const friendsComponent = {
    addingFriendInMessages: (userName, userId) => {
        return `<section id="addFriendMessages"><span class="addFriendMessagesText">Would you like to add ${userName} to your friend list?</span>
        <br><span class="addFriend--${userId}">Add Friend</p><p class="friendsBack">Back</span>
        </section>`
    },

    friendsToTheDOM: (userObject) => {
        return `
        <div class="singleFriendObject">
        <section id="userObjectID--${userObject.id}"> 
        
        <span class="friendUserName bold">${userObject.username}</span>
        <br>
        <span class="friendUserEmail">${userObject.email}</span>
        
        </section>
        
        </div>`

    }

}

export default friendsComponent