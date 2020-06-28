

 const messagesComponent = {
     HTMLComponent: (messageObject) => {
        const messageHtmlString = `<section>
        <section id="messageObject--${messageObject.id}" class="messageObject"><p>${messageObject.message}</p><button id="message--DeleteButton--${messageObject.id}">Delete</button>
        <button id="message--EditButton--${messageObject.id}">Edit</button></section>
       
        </section>`
        
        return messageHtmlString
         },
         //populates a text box to submit a message
         messageInputComponent: () => {
            const inputComponent = `<input class="message--Input" name="message__Input" type="text"><button class="message--SubmitButton">Submit</button>`
            return inputComponent
         },


         //factory function that will change the message sent inner html to hold the value for editing
         messageFactoryInputFunction: (messageObject) => {
            const messageInputBox = document.querySelector(`#messageObject--${messageObject.id}`)

            messageInputBox.innerHTML = `<input class="message--Input" name="message__Input" type="text">
            <button class="message--SubmitButton">Submit</button>
            <input type="hidden" id="hiddenIdValue" value="${messageObject.id}" />`

            const inputValue = messageObject.message
            const inputLocation = document.querySelector(".message--Input")
            inputLocation.value = inputValue
         }
 }

 export default messagesComponent