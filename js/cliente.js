class Cliente {

    constructor(identificacion, nombre, apellidos, fechaNacimiento,  direccion, barrio, numeroTelefono, correoElectronico, redesSociales, rol, nombreUsuario, contraseña) {

        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.barrio = barrio;
        this.numeroTelefono = numeroTelefono;
        this.correoElectronico = correoElectronico;
        this.redesSociales = redesSociales;
        this.rol = "cliente";
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;

    }

    
    setIdentificacion(identificacion) {

        this.identificacion = identificacion;
    }


    setNombre(nombre) {

        this.nombre = nombre;
    }

    setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    setFechaNacimiento(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    setBarrio(barrio){
        this.barrio = barrio;
    }

    setNumeroTelefono(numeroTelefono){
        this.numeroTelefono = numeroTelefono;
    }

    setCorreoElectronico(correoElectronico){
        this.correoElectronico = correoElectronico;
    }

    setRedesSociales(redesSociales){
        this.redesSociales = redesSociales;
    }

    setNombreUsuario(nombreUsuario){
        this.nombreUsuario = nombreUsuario;
    }

    setContraseña(contraseña){
        this.contraseña = contraseña;
    }

    getNombre() {

        return this.nombre;

    }

    
    getIdentificacion() {

        return this.identificacion;
        
    }

    getApellidos(){
        return this.apellidos;
    }

    getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    getDireccion(){
        return this.direccion;
    }

    getBarrio(){
        return this.barrio;
    }

    getNumeroTelefono(){
        return this.numeroTelefono;
    }

    getCorreoElectronico(){
        return this.correoElectronico;
    }

    getRedesSociales(){
        return this.redesSociales;
    }

    getRol(){
        return this.rol;
    }

    getNombreUsuario(){
        return this.nombreUsuario;
    }

    getContraseña(){
        return this.contraseña;
    }

}