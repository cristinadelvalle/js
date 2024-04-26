


// let listaDeProductos = parseInt(prompt('Ingresa un número del 1-10 para ver un producto'))


// switch (listaDeProductos) {
//     case 1:
//         alert('Seleccionaste Zapatos');
//         break;
//     case 2:
//         alert('Seleccionaste Zapatillas');
//         break;
//     case 3:
//         alert('Seleccionaste Bolsos');
//         break;
//     case 4:
//         alert('Seleccionaste Cartera');
//         break;
//     case 5:
//         alert('Seleccionaste Billetera');
//         break;
//     case 6:
//         alert('Seleccionaste Bandolera');
//         break;
//     case 7:
//         alert('Seleccionaste Mochila');
//         break;
//     case 8:
//         alert('Seleccionaste Gorro');
//         break;
//     case 9:
//         alert('Seleccionaste Guates');
//         break;
//     case 10:
//         alert('Seleccionaste Pañuelo');
//         break;
//     default:
//         break;
// }
// if () {
//     alert('mirar otro producto')
// let mostrarOtroProducto = parseInt( prompt('mostrar otro producto'))
// alert('elegiste ' + ' ' + mostrarOtroProducto)  
//     }







function mostrarProducto() {
  let listaDeProductos = parseInt(prompt('Ingresa un número del 1 al 10 para ver un producto'));

  switch (listaDeProductos) {
      case 1:
          alert('Seleccionaste Zapatos');
          break;
      case 2:
          alert('Seleccionaste Zapatillas');
          break;
      case 3:
          alert('Seleccionaste Bolsos');
          break;
      case 4:
          alert('Seleccionaste Cartera');
          break;
      case 5:
          alert('Seleccionaste Billetera');
          break;
      case 6:
          alert('Seleccionaste Bandolera');
          break;
      case 7:
          alert('Seleccionaste Mochila');
          break;
      case 8:
          alert('Seleccionaste Gorro');
          break;
      case 9:
          alert('Seleccionaste Guantes');
          break;
      case 10:
          alert('Seleccionaste Pañuelo');
          break;
      default:
          alert('El número ingresado no corresponde a ningún producto.');
  }

  let opcionMostrarOtroProducto = confirm('¿Deseas ver otro producto?');

  if (opcionMostrarOtroProducto) {
      mostrarProducto(); // Llama recursivamente a la función para mostrar otro producto
  } else {
      alert('Gracias por usar el programa.');
  }
}

mostrarProducto();



// function ingresarNombres() {
//   let listaNombres = "";

//   while (true) {
//     let nombre = prompt("Ingresar nombre (deja vacío para finalizar)");

//     if (nombre !== null && nombre !== "") {
//       listaNombres += "- " + nombre + "\n";
//     } else {
//       break;
//     }
//   }

//   if (listaNombres !== "") {
//     alert("Lista de nombres ingresados:\n\n" + listaNombres);
//   } else {
//     alert("No se ingresaron nombres.");
//   }
// }

// function ingresarNombresConOpcion() {
//   let nombreIngresado = prompt("Ingresar nombre");
//   let listaNombres = "";

//   while (nombreIngresado) {
//     alert("El nombre ingresado es " + nombreIngresado);
//     listaNombres += "- " + nombreIngresado + "\n";

//     let ingresarOtroNombre = prompt("¿Quieres ingresar otro nombre?");

//     if (ingresarOtroNombre) {
//       alert("Ingresaste " + ingresarOtroNombre);
//       nombreIngresado = ingresarOtroNombre;
//     } else {
//       alert("Gracias por usar el programa.");
//       break;
//     }
//   }

//   if (listaNombres !== "") {
//     alert("Lista de nombres ingresados:\n\n" + listaNombres);
//   } else {
//     alert("No se ingresaron nombres.");
//   }
// }

// ingresarNombresConOpcion();













