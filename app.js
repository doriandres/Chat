//Dependencias
var express = require('express');
var fs = require("fs");
var socket= require("socket.io");



//Variables globales
var app = express();
var http = require('http').Server(app);
var io = socket(http);




app.use(express.static(__dirname)); //Esto es para decirle al server donde inicia el arbol de archivos




io.on("connection", function(socket){ //inicializador del socket
    

    socket.on("mensajeServer", function(mensajeRecibido){ //se mantiene esperando a que llegue un mensaje al server
        
        
        io.sockets.emit("mensajeClient", mensajeRecibido);//Manda del mensaje a todos los que esten conectados
        
        
    });
   
    
});




app.get("/", function(req, res){
    
    res.writeHead(200, {"Content-Type":"text/html"});
    
    var readStream = fs.createReadStream(__dirname+"/chat.html", "utf8");
    
    readStream.pipe(res);
    
});




http.listen(3000, function(){ 
  console.log('localhost:3000');
});