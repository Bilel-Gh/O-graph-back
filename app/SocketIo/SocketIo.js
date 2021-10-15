

module.exports = (io) => {


    io.on('connection', socket => {
        console.log("connectionnn")
        // console.log(socket.request.headers)
        socket.on('NewComment', (state)=>{
            
           
            sendNewMessage(socket, state)
        })
     })
    
     const sendNewMessage = (socket, state) => {
        console.log('pass')
        socket.broadcast.emit('SendNewComment', state);
     }


};
