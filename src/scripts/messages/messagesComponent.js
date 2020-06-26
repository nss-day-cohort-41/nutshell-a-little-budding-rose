

 const messagesComponent = {
     HTMLComponent: (messageObject) => {
        const messageHtmlString = `<section>
        <section class="messageObject"><p>${messageObject.message}</p></section>
        
        </section>`
        
        return messageHtmlString
         },

         messageInputComponent: () => {
            const inputComponent = `<input class="message--Input" name="message__Input" type="text" placeholder="Add Message"><button class="message--SubmitButton">Submit</button>`
            return inputComponent
         }
 }

 export default messagesComponent