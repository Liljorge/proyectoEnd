document.getElementById("movie-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var codigo = document.getElementById("codigo").value;
    var nombreOriginal = document.getElementById("nombre-original").value;
    var nombreAsignado = document.getElementById("nombre-asignado").value;
    var genero = document.getElementById("genero").value;
    var idiomaOriginal = document.getElementById("idioma-original").value;
    var idiomasDisponibles = document.getElementById("idiomas-disponibles").value;
    var duracionHoras = document.getElementById("duracion-horas").value;
    var duracionMinutos = document.getElementById("duracion-minutos").value;
    var duracionSegundos = document.getElementById("duracion-segundos").value;
    var actoresPrincipales = document.getElementById("actores-principales").value;
    var actoresSecundarios = document.getElementById("actores-secundarios").value;
    var afichesDisponibles = document.getElementById("afiches-disponibles").value;
    var numeroCopias = document.getElementById("numero-copias").value;
    var productora = document.getElementById("productora").value;
  
    
  
    // Crea una nueva fila en la tabla con los valores del formulario
    var table = document.getElementById("movie-table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    newRow.innerHTML = "<td>" + codigo + "</td>" +
                       "<td>" + nombreOriginal + "</td>" +
                       "<td>" + nombreAsignado + "</td>" +
                       "<td>" + genero + "</td>" +
                       "<td>" + idiomaOriginal + "</td>" +
                       "<td>" + idiomasDisponibles + "</td>" +
                       "<td>" + duracionHoras + "h " + duracionMinutos + "min " + duracionSegundos + "s</td>" +
                       "<td>" + actoresPrincipales + "</td>" +
                       "<td>" + actoresSecundarios + "</td>" +
                       "<td>" + afichesDisponibles + "</td>" +
                       "<td>" + numeroCopias + "</td>" +
                       "<td>" + productora + "</td>" +
                       "<td><button class='editar'></button> <button class=''></button></td>";
  
    
    document.getElementById("movie-form").reset();
  });
  
  function borrarInformacion() {
    var elemento = document.getElementById("informacion");
    elemento.innerHTML = "";
  }