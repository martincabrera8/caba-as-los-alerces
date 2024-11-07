

const nombre = document.getElementById("name");
const mail = document.getElementById("email");


nombre.addEventListener("mousedown", function() {
    alert("ingrese su nombre");
  });

mail.addEventListener("mousedown", function() {
    alert("Ingrese su mail");
});

 


function enviarReserva() {
   
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var fechaSeleccionada = document.getElementById('date').value;
    
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    if (fechaSeleccionada === "") {
        alert("Por favor, selecciona una fecha.");
        return false;
    }
   
    alert("reserva enviada correctamente.");
    
}

$(document).ready(function() {
    
    $("#name, #email, #date").mouseenter( function() {
        $(this).stop().animate({
            padding: "12px"
            
        }, 200);
    });

   
    $("#name, #email, #date").mouseleave (function() {
        $(this).stop().animate({
            padding: "10px" 
        }, 200);
    });
});
