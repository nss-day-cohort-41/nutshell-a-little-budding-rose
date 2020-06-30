

const friendsData = {
    friendsDataUrl: "http://localhost:8088/friends",

    //put single friend entry into friend list
    updateFriendList: (id, friendId) => {
        return fetch(`${friendsData.friendsDataUrl}/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(friendId)
        })
       },

       //get active users object
       getActiveUser: (id) => {
           return fetch(`${friendsData.friendsDataUrl}/${id}`)
           .then(response => response.json())
       }

}

export default friendsData