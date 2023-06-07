function adicionarUsuario(){
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");;

    nombreUsuarioInput = document.getElementById("username");
    contraseñaInput = document.getElementById("password");
    identificacionInput = document.getElementById("identificacionUsuario");
    rolInput = document.getElementById("rol");
    fechaCreacionInput = document.getElementById("fechaCreacion");
    fechaModificacionInput = document.getElementById("fechaModificacion");

    usuario = new Usuario(nombreUsuarioInput.value, contraseñaInput.value, identificacionInput.value, rolInput.value, fechaCreacionInput.value, fechaModificacionInput.value);
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nombreUsuarioInput.value = "";
    contraseñaInput.value = "";
    identificacionInput.value = "";
    rolInput.value = "";
    fechaCreacionInput.value = "";
    fechaModificacionInput.value = "";

    nombreUsuarioInput.focus();

    console.log("Usuarios Registrados")
    console.log(JSON.parse(localStorage.getItem("usuarios") || "[]"))

}