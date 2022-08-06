const {io} = require('../index');




// Mensajes de Sockets. cliente es la computadores que se conecta al socket
io.on('connection', client => {
    console.log('Cliente Conectado (desde JS)');
    client.on('disconnect', () => {
        console.log('Cliente Desconectado (desde JS)');
    });

    // creamos la conexion del stream de imagenes
    client.on('stream', image => {
        // TODO: emitir evento a todos los sockets conectados
        client.broadcast.emit('stream', image);


    });

 
    // escuchar el mensaje desde el cliente
    client.on('mensaje', payload => {
        console.log('Mensaje !!!', payload); // ojo payload ya no se usa
        io.emit('mensaje', {admin:'Nuevo mensaje'});
    });
 

});
// server.listen(3000);