import messagesAPI from "./messagesData.js"
import messagesComponent from "./messagesComponent.js"
import friendsEventListener from "../friends/friendsEvents.js"


//listing the message to the DOM
//first function
//iterate dataArray


const messageList = () => {
    console.log("test")
    //find location and clear the section
    const messageLocation = document.querySelector(".message__Object--section")
    messageLocation.innerHTML = "";

    for(let messageObject of messagesAPI.messagesDataArray) {
        //iterate the data
        const convertedMessageObject = messagesComponent.HTMLComponent(messageObject)

        messageLocation.innerHTML += convertedMessageObject
    }
    
    // friendsEventListener()
}

export default messageList