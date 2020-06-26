import messagesAPI from "./messagesData.js"
import messagesComponentHTML from "./messagesComponent.js"

//listing the message to the DOM
//first function
//iterate dataArray


const messageList = () => {
    //find location and clear the section
    messageLocation = document.querySelector(".messages")
    messageLocation.innerHTML = "";

    for(let messageObject of messagesAPI.messagesDataArray) {
        //iterate the data
        const convertedMessageObject = messagesComponentHTML(messageObject)

        messageLocation.innerHTML += convertedMessageObject
    }
}

export default messageList