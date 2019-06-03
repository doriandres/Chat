var socket= io.connect("http://localhost:3000/");

var nombre= document.getElementById("nombre");

var mensaje= document.getElementById("mensaje");

var entrar= document.getElementById("entrar");


entrar.addEventListener("click", function(){ //Lo mismo que un onclick pero mas elegante (°-°)/
    
    
    if (nombre.value!=""){
        
        mensaje.disabled=false;
        
        nombre.disabled=true;
        
        entrar.disabled=true;
        
        document.getElementById("registro").style.display="none";
        
        
    }else{
        
        alert("Ingrese un nombre")
        
    }
    
    
});


mensaje.addEventListener("change", function(){
    
    if (mensaje.value!=""){
        
        socket.emit("mensajeServer", {nombre:nombre.value, mensaje:mensaje.value}/*esto sera enviado al server*/);
        
        mensaje.value=""; //limpiar mensaje
        
    }
    
});



socket.on("mensajeClient", function(mensajeRecibido){
    
    
    var display= ' <tr style="margin-bottom: 10px;"><td>'+mensajeRecibido.nombre+':</td><td> '+mensajeRecibido.mensaje+' </td></tr> ';
    
    
    var cuadro= document.getElementById("display");
    
    
    cuadro.innerHTML+=display;
    
    
});
