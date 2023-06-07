// Función para bloquear las posiciones vendidas
function bloquearPosicionesVendidas() {
    // Obtener las posiciones vendidas desde el almacenamiento local
    const posicionesVendidas = JSON.parse(localStorage.getItem('posicionesVendidas')) || [];

    // Obtener todos los elementos de posición (checkboxes)
    const checkboxes = document.querySelectorAll('input[name="posiciones[]"]');

    // Iterar sobre cada checkbox y deshabilitar los vendidos
    checkboxes.forEach(checkbox => {
      const posicion = checkbox.value;
      if (posicionesVendidas.includes(posicion)) {
        checkbox.disabled = true;
      }
    });
  }

  // Función para realizar la venta
  function vender() {
    // Obtener los datos del formulario
    const sala = document.getElementById('sala').value;
    const horarios = Array.from(document.querySelectorAll('input[name="horario"]:checked')).map(checkbox => checkbox.value);
    const numTiquetes = document.getElementById('num_tiquetes').value;
    const posiciones = Array.from(document.querySelectorAll('input[name="posiciones[]"]:checked')).map(checkbox => checkbox.value);
    const formaPago = document.getElementById('forma_pago').value;
    const cliente = document.getElementById('cliente').value;
    const fechaVenta = document.getElementById('fecha_venta').value;
    const vendedor = document.getElementById('vendedor').value;

    // Realizar el registro de la venta en la tabla
    const tablaVentas = document.getElementById('tablaVentas');
    const row = tablaVentas.insertRow();
    row.innerHTML = `
      <td>${sala}</td>
      <td>${horarios.join(', ')}</td>
      <td>${numTiquetes}</td>
      <td>${posiciones.join(', ')}</td>
      <td>${formaPago}</td>
      <td>${cliente}</td>
      <td>${fechaVenta}</td>
      <td>${vendedor}</td> 
    `;

    // Bloquear las posiciones vendidas
    posiciones.forEach(posicion => {
      const checkbox = document.getElementById(posicion);
      checkbox.disabled = true;
    });

    // Guardar las posiciones vendidas en el almacenamiento local
    const posicionesVendidas = JSON.parse(localStorage.getItem('posicionesVendidas')) || [];
    localStorage.setItem('posicionesVendidas', JSON.stringify([...posicionesVendidas, ...posiciones]));
  }