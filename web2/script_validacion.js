function validarFormulario(event) {
    
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('message') ? document.getElementById('message').value : "";

  
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault(); 
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        event.preventDefault();
        return;
    }

    if (mensaje === "" && document.getElementById('message')) {
        alert("Por favor, ingresa un mensaje.");
        event.preventDefault();
        return;
    }

    
    alert("Formulario enviado correctamente.");
}

$(document).ready(function() {
    
    $("#name, #email, #message").mouseenter( function() {
        $(this).stop().animate({
            padding: "18px"
            
        }, 200);
    });

   
    $("#name, #email, #message").mouseleave (function() {
        $(this).stop().animate({
            padding: "10px" 
        }, 200);
    });
});