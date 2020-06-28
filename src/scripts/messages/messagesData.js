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
        
       
        return fetch(`${messagesAPI.messageUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(messageObject)
        })
         .then(response => response.json())
         
      
        
    },
    updateEditMessage: (id, editObject) => {
        return fetch(`${messagesAPI.messageUrl}/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(editObject)
        })
       },

    getUserMessageEntry: (id) => {
        return fetch(`${messagesAPI.messageUrl}/${id}`)
    .then(response => response.json());
    },

    deletePostData: (id) => {

        return fetch(`${messagesAPI.messageUrl}/${id}`, {
        method: "DELETE"
    }).then(response => response.json());

    }

}

export default messagesAPI
