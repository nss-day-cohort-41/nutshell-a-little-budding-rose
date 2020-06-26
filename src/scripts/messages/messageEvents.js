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
    })
}

export default messageEventListener