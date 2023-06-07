function adicionarSucursal(){
    var sucursales = JSON.parse(localStorage.getItem("sucursales") || "[]");

    codigoInput = document.getElementById("codigo");
    direccionInput = document.getElementById("direccion");
    departamentoInput = document.getElementById("departamento");
    ciudadInput = document.getElementById("ciudad");
    barrioInput = document.getElementById("barrio");
    gerenteEncargadoInput = document.getElementById("gerenteEncargado");
    numeroSalasInput = document.getElementById("numeroSalas");
    numeroTrabajadoresInput = document.getElementById("numeroTrabajadores");
    cafeteriaInput = document.getElementById("cafeteria");

    sucursal = new Sucursal(codigoInput.value, direccionInput.value, departamentoInput.value, ciudadInput.value, barrioInput.value, gerenteEncargadoInput.value, numeroSalasInput.value, numeroTrabajadoresInput.value, cafeteriaInput.value);

    sucursales.push(sucursal);
    localStorage.setItem("sucursales", JSON.stringify(sucursales));

    codigoInput.value = "";
    direccionInput.value = "";
    departamentoInput.value = "";
    ciudadInput.value = "";
    barrioInput.value = "";
    gerenteEncargadoInput.value = "";
    numeroSalasInput.value = "";
    numeroTrabajadoresInput.value = "";
    cafeteriaInput.value = "";

    codigoInput.focus();

    console.log("Sucursales registradas")
    console.log(JSON.parse(localStorage.getItem("sucursales") || "[]"))

}