function iniciarSesion() {

    // Obtener los valores de los campos
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


   
        // Obtener el usuario registrado del almacenamiento local
        var usuario = JSON.parse(localStorage.getItem("usuarios"));

        for (const item of usuario) {
            if(item.nombreUsuario == username && item.contraseña == password){
                if(item.rol == "administrador"){
                    window.location.href = "administrador.html"
                    break;
                } else if (item.rol == "gerente"){
                    window.location.href = "gerente.html"
                    break;
                } else if (item.rol == "vendedor"){
                    window.location.href = "vendedor.html"
                    break;
                } 
            }
        }  
        
        
}

/*
function iniciarSesionCliente(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var cliente = JSON.parse(localStorage.getItem("cliente"));

    for (const item of cliente) {
        if(item.nombreUsuario == username && item.contraseña == password){
            window.location.href = "cliente.html";
        }
    }
}*/



