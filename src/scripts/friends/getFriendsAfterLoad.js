import friendsData from "./friendsData.js"
import friendsComponent from "./friendsComponent.js"



// const activeUserID = sessionStorage.getItem("activeUser")
const getFriendsData = (user) => {
    const activeUserID = user.id
    console.log(activeUserID)

   const logInButton = document.querySelector("#logInButton")
   
       console.log("it worked")
    
    const locationForFriendsToDisplay = document.querySelector(".friends_list")

        friendsData.getActiveUser(activeUserID).then((activeUserObject) => {
            // friendsData.getUserData
            for(let friend of activeUserObject.followersId){
                friendsData.getUserData(friend).then((object) => {
                    locationForFriendsToDisplay.innerHTML += friendsComponent.friendsToTheDOM(object)
                })
                
            }
        })
    

    
    
}


export default getFriendsData