import messagesAPI from "./messagesData.js"
import messagesComponent from "./messagesComponent.js"

//listing the message to the DOM
//first function
//iterate dataArray


const messageList = () => {
    //find location and clear the section
    const messageLocation = document.querySelector(".message__Object--section")
    messageLocation.innerHTML = "";

    for(let messageObject of messagesAPI.messagesDataArray) {
        //iterate the data
        const convertedMessageObject = messagesComponent.HTMLComponent(messageObject)

        messageLocation.innerHTML += convertedMessageObject
    }
}

export default messageList