import friendsComponent from "./friendsComponent.js"

const userID = 5;
//add event listener to friends section
//add event when item is clicked on in messages to add a friend
//add pop up option to add them as a friend
const friendsEventListener = () => {
    const friendsLocation = document.querySelector(".friends_list")

    //event listener for messages
    //listening for a click event so the user can 
    //add a friend that's not in their list messages-title--  messageObject
    
    const messagesLocationEvent = document.querySelector(".message__Object--section")
    // const addFriendLocationInMessageObject = document.querySelector(.)
    messagesLocationEvent.addEventListener("click", clickEvent => {
        if(clickEvent.target.className.startsWith("messages-title--")) {
            const getUserInfo = event.target.className.split("messages-title--")[1];
            const userId = getUserInfo.split("---")[0];
            const userName = getUserInfo.split("---")[1];
           if(userId != userID) {
            messagesLocationEvent.innerHTML = friendsComponent.addingFriendInMessages(userName)
           } 
           //==================================
           //problem the friends pop up works but is ugly

        }
    })


    //event listener inside of the friend section
    friendsLocation.addEventListener("click", clickEvent => {

    })



}


export default friendsEventListener