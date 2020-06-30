import friendsComponent from "./friendsComponent.js";
import friendsData from "./friendsData.js"

//add event listener to friends section
//add event when item is clicked on in messages to add a friend
//add pop up option to add them as a friend
const friendsEventListener = () => {
        let activeFriendLocation = false
      const activeUserID = sessionStorage.getItem("activeUser")

    
    const friendsLocation = document.querySelector(".friends_list")
    
    //event listener for messages
    //listening for a click event so the user can 
    //add a friend that's not in their list messages-title--  messageObject
    
    const messagesLocationEvent = document.querySelector(".message__Object--section")
    // const addFriendLocationInMessageObject = document.querySelector(.)
    messagesLocationEvent.addEventListener("click", clickEvent => {


        

        if(clickEvent.target.className.startsWith("messages-title--")) {
            console.log("hey")
            const getUserInfo = event.target.className.split("messages-title--")[1];
            const userId = getUserInfo.split("---")[0];
            const userNameAndMessageId = getUserInfo.split("---")[1];
            const userName = userNameAndMessageId.split("-")[0];
            const messageId = userNameAndMessageId.split("-")[1];
           if(userId != activeUserID) {
               //gets location of the individual box that was selected
              
            const locationForMessageBox = document.querySelector(`#messageObject--${messageId}`)
            
            if(!activeFriendLocation) {
            locationForMessageBox.innerHTML = friendsComponent.addingFriendInMessages(userName, userId)
            activeFriendLocation = true
            
            }
            //below is add friend inside of messages
            const locationForaddFriend = document.querySelector("#addFriendMessages")
            
            

           } 

        }
        else if(clickEvent.target.className.startsWith("addFriend")) {
                const friendId = event.target.className.split("addFriend--")[1]
                const activeUserObject = friendsData.getActiveUser(activeUserID).then((userObject) => {
                    console.log(userObject)
                    userObject.followersId.push(friendId)
                    friendsData.updateFriendList(activeUserID, userObject)
                })
                // friendsData.updateFriendList(activeUserID, )
            }
        
    })


    //event listener inside of the friend section
    friendsLocation.addEventListener("click", clickEvent => {

    })


    
}


export default friendsEventListener