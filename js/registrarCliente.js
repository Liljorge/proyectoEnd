function adicionarCliente() {

    var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");;

    
    identificacionInput = document.getElementById("identificacionCliente");
    nombreUsuarioInput = document.getElementById("usernameCustomer");
    nombresInput = document.getElementById("nombresCliente");
    apellidosInput = document.getElementById("apellidosClientes");
    fechaNacimientoInput = document.getElementById("fechaNacimiento");
    direccionInput = document.getElementById("direccionCliente");
    barrioInput = document.getElementById("barrioCliente");
    numeroTelefonoInput = document.getElementById("telefono")
    correoElectronicoInput = document.getElementById("correo");
    redesSocialesInput = document.getElementById("redesSociales");
    contraseñaInput = document.getElementById("passwordCustomer");


    cliente = new Cliente(identificacionInput.value, nombreUsuarioInput.value, nombresInput.value, apellidosInput.value, fechaNacimientoInput.value, direccionInput.value, barrioInput.value, numeroTelefonoInput.value, correoElectronicoInput.value, redesSocialesInput.value, contraseñaInput.value);
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    nombreUsuarioInput.value = "";
    identificacionInput.value = "";
    nombresInput.value = "";
    apellidosInput.value = "";
    fechaNacimientoInput.value = "";
    direccionInput.value = "";
    barrioInput.value = "";
    numeroTelefonoInput.value = "";
    correoElectronicoInput.value = "";
    redesSocialesInput.value = "";
    contraseñaInput.value = "";


    nombreUsuarioInput.focus();

    console.log("Clientes Registrados")
    console.log(JSON.parse(localStorage.getItem("clientes") || "[]"))

}