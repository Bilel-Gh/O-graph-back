module.exports = (io) => {


    io.on('connection', socket => {
        console.log("connectionnn")
    
        socket.on('NewComment', (state)=>{
            console.log(state, socket.id)
           
            sendNewMessage(socket)
        })
     })
    
     const sendNewMessage = (socket) => {
        console.log("after receive")
        socket.emit("SendNewComment", "newStateComment");
     }


};