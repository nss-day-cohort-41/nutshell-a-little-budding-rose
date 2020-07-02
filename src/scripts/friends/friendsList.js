
import friendsData from "./friendsData.js"
import friendsComponent from "./friendsComponent.js"


const displayFriendList = (activeUserObject) => {
    
    //get active user friend list
    //look for the active Users  friend list
    //iterate that friend list
    //gather individual user data based on the each indivudal friend 
    //display that data to the dom in the friend section
    const locationForFriendsToDisplay = document.querySelector(".friends_list")
    locationForFriendsToDisplay.innerHTML = ""
        

    console.log("active userObject", activeUserObject.followersId)
    for(let friendId of activeUserObject.followersId) {
        console.log(friendId)
        locationForFriendsToDisplay.innerHTML = ""
        friendsData.getUserData(friendId).then((object) => {
            locationForFriendsToDisplay.innerHTML += friendsComponent.friendsToTheDOM(object) + "hey"
        })
    }
    // friendsData.getUserData()
    


}

export default displayFriendList