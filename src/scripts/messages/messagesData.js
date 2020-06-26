//get data for messages
//pass messages into an array for eassier use
// make this an object with data functions as methods
// import messageList from "./messages/messagesList.js"

const messagesAPI = {
    messagesDataArray: [],
    messageUrl: "http://localhost:8088/messages",
    messagesGetData: () => {
        fetch(`${messagesAPI.messageUrl}`).then(
            (httpResponse) => {
           return httpResponse.json()
        }).then(
            (messageData) => {
            messagesAPI.messagesDataArray.push(messageData)
            return messagesAPI.messagesDataArray
        })
    }
}

export default messagesAPI
