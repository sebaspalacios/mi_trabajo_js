/* let y = 0
 do {
    console.log(`Carpintero de rango ${y}`)
    y++
 } while (y <= 3); 

 for (let i = 0; i <=3; i++){
    alert (`Carpintero de rango ${i}`)
 } */
 
/*  function solicitaNombre () {
   let nombre = prompt ("Ingrese su nombre uduario")
   console.log (`El nombre del usuario es: ${nombre}`)
 }
 
 link();
 function link () {
   let nombre = prompt ("Ingrese su nombre de usuario")
   console.log (`El nombre del usuario es: ${nombre}`)
 }  

const trabajadores =["Carpintero", "Albañil", "Arquitecta", "Electricista",
 "Ingeniero","Gasista", "Mecanico de moto"]
console.log (trabajadores)

trabajadores.push ("Fotografa")
console.log(trabajadores)



const turnoFotografa = new Date ("septiembre 10, 2022 20:00");
console.log(turnoFotografa)
 */
class cliente {
   constructor (usuario, clave){
      this.usuario = usuario;
      this.clave = clave;
   }
}

let button = document.getElementById ("ingreso");
button.addEventListener("click", cargarCliente)

function cargarCliente(){
   let usuario = document.getElementById ("usuario").value;
   let clave = document.getElementById("clave").value;
   let cliente1 = new cliente(usuario, clave);
   console.log(cliente1);
   mostrarCliente(cliente1);
}
function mostrarCliente(cliente) {
   let formulario = document.getElementById ("customer")
   formulario.innerHTML = "";

let nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `<h1> Hola ${cliente.usuario}! has iniciado sesión</h1>`;
nuevoContenido.className = "info-cliente";
formulario.appendChild(nuevoContenido)
}








