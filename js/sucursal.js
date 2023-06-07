class Sucursal {
    constructor(codigo, direccion, departamento, ciudad, barrio, gerenteEncargado, numeroSalas, numeroTrabajadores, cafeteria){

        this.codigo = codigo;
        this.direccion = direccion;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.gerenteEncargado = gerenteEncargado;
        this.numeroSalas = numeroSalas;
        this.numeroTrabajadores = numeroTrabajadores;
        this.cafeteria = cafeteria;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    setDepartamento(departamento){
        this.departamento = departamento;
    }

    setCiudad(ciudad){
        this.ciudad = ciudad;
    }

    setBarrio(barrio){
        this.barrio = barrio;
    }

    setGerenteEncargado(gerenteEncargado){
        this.gerenteEncargado = gerenteEncargado;
    }

    setNumeroSalas(numeroSalas){
        this.numeroSalas = numeroSalas;
    }

    setNumeroTrabajadores(numeroTrabajadores){
        this.numeroTrabajadores = numeroTrabajadores;
    }

    setCafeteria(cafeteria){
        this.cafeteria = cafeteria;
    }

    getCodigo(){
        return this.codigo;
    }

    getDireccion(){
        return this.direccion;
    }

    getDepartamento(){
        return this.departamento;
    }

    getCiudad(){
        return this.ciudad;
    }

    getBarrio(){
        return this.barrio;
    }

    getGerenteEncargado(){
        return this.gerenteEncargado;
    }

    getNumeroSalas(){
        return this.numeroSalas;
    }

    getNumeroTrabajadores(){
        return this.numeroTrabajadores;
    }

    getCafeteria(){
        return this.cafeteria;
    }

}