class Usuario {
    constructor(nombreUsuario, contraseña, identificacion, rol, fechaCreacion, fechaModificacion){

        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.identificacion = identificacion;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
    }

    setNombreUsuario(nombreUsuario){
        this.nombreUsuario = nombreUsuario;
    }

    setContraseña(contraseña){
        this.contraseña = contraseña;
    }

    setIdentificacion(identificacion){
        this.identificacion = identificacion;
    }

    setRol(rol){
        this.rol = rol;
    }

    setFechaCreacion(fechaCreacion){
        this.fechaCreacion = fechaCreacion;
    }

    setFechaModificacion(fechaModificacion){
        this.fechaModificacion = fechaModificacion;
    }

    getNombreUsuario(){
        return this.nombreUsuario;
    }

    getContraseña(){
        return this.contraseña;
    }

    getIdentificacion(){
        return this.identificacion;
    }

    getRol(){
        return this.rol;
    }

    getFechaCreacion(){
        return this.fechaCreacion;
    }

    getFechaModificacion(){
        return this.fechaModificacion;
    }
}