

const friendsComponent = {
    addingFriendInMessages: (userName, userId) => {
        return `<section id="addFriendMessages"><p class="addFriendMessagesText">Would you like to add ${userName} to your friend list?</p>
        <p class="addFriend--${userId}">Add Friend</p><p class="friendsBack">Back</p>
        </section>`
    }

}

export default friendsComponent