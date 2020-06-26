//get data for messages
//pass messages into an array for eassier use
// make this an object with data functions as methods
// import messageList from "./messages/messagesList.js"
//`${messagesAPI.messageUrl}`
const messagesAPI = {
    messagesDataArray: [],
    messageUrl: "http://localhost:8088/messages",
    messagesGetData: () => {
 return fetch(`${messagesAPI.messageUrl}`).then(
            (httpResponse) => {
           return httpResponse.json()
        }).then(
            (messageData) => {
                messagesAPI.messagesDataArray = []
            messagesAPI.messagesDataArray = messageData
            
        })
    },
    messagePostData: (messageObject) => 
    {
        
       
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(messageObject)
        })
         .then(response => response.json())
         
      
        
    }

}

export default messagesAPI
