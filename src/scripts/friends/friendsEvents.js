import friendsComponent from "./friendsComponent.js";
import friendsData from "./friendsData.js"
import displayFriendList from "./friendsList.js"
import messageList from "../messages/messagesList.js"

//add event listener to friends section
//add event when item is clicked on in messages to add a friend
//add pop up option to add them as a friend


// !activeUserObject.followersId.some((element) => element == userId)
//THE ABOVE CODE CHECKS THE FRIEND LIST!!!!!!!!!!! OF EACH USER
const friendsEventListener = () => {
  let activeFriendLocation = false
  const activeUserID = sessionStorage.getItem("activeUser")
  let activeUserObject;
  if (activeUserID) {
    friendsData.getActiveUser(activeUserID).then((userObject) => {
      activeUserObject = userObject
    })
  }
  const friendsLocation = document.querySelector(".friends_list")

  //event listener for messages
  //listening for a click event so the user can 
  //add a friend that's not in their list messages-title--  messageObject

  const messagesLocationEvent = document.querySelector(".message__Object--section")
  // const addFriendLocationInMessageObject = document.querySelector(.)
  messagesLocationEvent.addEventListener("click", clickEvent => {
    friendsData.getActiveUser(activeUserID).then((userObject) => {
      activeUserObject = {}
      activeUserObject = userObject
    })




    if (clickEvent.target.className.startsWith("messages-title--")) {
      console.log("hey")
      // console.log(activeUserObject.followersId.some((element) => element == userID))

      const getUserInfo = event.target.className.split("messages-title--")[1];
      const userId = getUserInfo.split("---")[0];
      const userNameAndMessageId = getUserInfo.split("---")[1];
      const userName = userNameAndMessageId.split("-")[0];
      const messageId = userNameAndMessageId.split("-")[1];

      // use object activeuserobject and check if it has the active User has the 
      //clicked on user's ID in their friend list
      console.log(userId)
      console.log(activeUserObject.followersId.some((element) => element == userId), "here bitch")

      if (userId != activeUserID && !activeUserObject.followersId.some((element) => element == userId)) {



        //gets location of the individual box that was selected

        const locationForMessageBox = document.querySelector(`#messageObject--${messageId}`)

        if (!activeFriendLocation) {
          locationForMessageBox.innerHTML = friendsComponent.addingFriendInMessages(userName, userId)
          activeFriendLocation = true

        }
        //below is add friend inside of messages
        const locationForaddFriend = document.querySelector("#addFriendMessages")



      }

    }
    else if (clickEvent.target.className.startsWith("addFriend")) {
      activeFriendLocation = false
      // console.log("here", activeUserObject)
      const friendId = event.target.className.split("addFriend--")[1]
      const activeUserObject = friendsData.getActiveUser(activeUserID).then((userObject) => {

        userObject.followersId.push(friendId)
        friendsData.updateFriendList(activeUserID, userObject).then(() => {
          //friends list has been updated!!! 
          //must display new friend in the DOM 
          friendsData.getActiveUser(activeUserID).then((myObject) => {
            displayFriendList(myObject)
          })
          
        }).then(() => {
          
          ///must call message List to get rid of inner html of box
          //easiest way
          
          messageList()
        })
      })
      
    }

  })


  //event listener inside of the friend section
  friendsLocation.addEventListener("click", clickEvent => {

  })



}


export default friendsEventListener