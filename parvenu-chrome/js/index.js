function socket_send_cmd(socket, cmd, params) {
    if (!params) 
    params = [];
    var msg = {
    id: client_id,
    method: cmd,    
    params: params
    };
    socket.send(JSON.stringify(msg));
}

var socket = new WebSocket('wss://ws.gate.io/v3');

socket.onopen = function () {
    console.log("Connected");
    socket_send_cmd(socket, 'server.ping');
};
socket.onmessage = function (e) {
    console.log('Server: ' + e.data);
}