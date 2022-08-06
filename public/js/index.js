


const peer = new Peer();

peer.on('open' , (id)=>{
    socket.emit("newUser" , id);
});


navigator.mediaDevices.getUserMedia({
  video:true,
  audio:true
}).then((stream)=>{
  
      // Some more code
}).catch(err=>{
    alert(err.message)
})