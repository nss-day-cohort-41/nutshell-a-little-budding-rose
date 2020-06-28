//add an event listner to message section
//if click is on new button
//add input box text
//post 

import messagesComponent from "./messagesComponent.js"
import messagesAPI from "./messagesData.js"
import messageList from "./messagesList.js"
const messageEventListener = () => {
    const messageEventLocation = document.querySelector(".messages")
    const messageInputLocation = document.querySelector(".messageInputSection")

    messageEventLocation.addEventListener("click", clickEvent => {
        // message--SubmitButton
        if(clickEvent.target.className == "newMessageButton") {
            messageInputLocation.innerHTML = messagesComponent.messageInputComponent()
        }

        //saves messages
        else if(clickEvent.target.className == "message--SubmitButton") {
            const inputLocation = document.querySelector(".message--Input") 
            const messageInputValue = {"message": inputLocation.value}     
                 console.log(messageInputValue)
            messagesAPI.messagePostData(messageInputValue)
            .then(() =>{
                messagesAPI.messagesGetData().then(() => {
                    messageList()
                    messageInputLocation.innerHTML = ""
                })
            })
   
        }

        //delete message event
        else if(clickEvent.target.id.startsWith("message--DeleteButton--")) {
            const cardDelete = event.target.id.split("--DeleteButton--")[1];
            console.log(cardDelete)

            messagesAPI.deletePostData(cardDelete).then(() =>{
                messagesAPI.messagesGetData().then(() => {
                    messageList()
                    
                })
            })
        }


    })
}

export default messageEventListener