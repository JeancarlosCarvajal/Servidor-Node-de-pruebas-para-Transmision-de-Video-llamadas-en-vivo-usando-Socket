




// Inicio Sockets
var socket = io(); 
socket.on('connect', function () {
    console.log('Conectado al Servidor (desde HTML)');
}); 
socket.on('disconnect', function () {
    console.log('Perdimos Comunicacion con el Servidor (desde HTML)');
}); 
// emitir un evento
socket.emit('mensaje', { nombre: 'Jeancarlos' } ); 
// recibir un mensaje del administrador
socket.on('mensaje', function (payload) {
    console.log('Escuchando: ', payload)
});
// Fin Sockets