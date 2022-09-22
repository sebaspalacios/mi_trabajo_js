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
/*   class cliente {
   constructor (usuario, clave){
      this.usuario = usuario;
      this.clave = clave;
   }
}
const inicio = document.getElementById ('inicioSesion');
inicio.addEventListener("click",cargarCliente)

function cargarCliente(){
   const usuario = document.getElementById ("usuario").value;
   const clave = document.getElementById("clave").value;
   const cliente1 = new cliente(usuario, clave);
   console.log(cliente1);
   mostrarCliente(cliente1);
}
function mostrarCliente(cliente) {
   const formulario = document.getElementById ("customer")
   formulario.innerHTML = "";

const nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `<h1> Hola ${cliente.usuario}! has iniciado sesión</h1>`;
nuevoContenido.className = "info-cliente";
formulario.appendChild(nuevoContenido)
} 
 */
 



 //registro
const form = document.getElementById("formulario")
const enviarFormulario = (event)=> {
event.preventDefault()
const {name,email,apellido,contraseña} = event.target
console.log(name.value, 
   email.value,
   apellido.value,
   contraseña.value);
if(name.value.length, email.value.length, apellido.value.length === 0) alert ("Complete sus datos")
if(contraseña.value.length < 8) alert("Su contraseña debe tener más de 8 caracteres")
}
form.addEventListener('submit', enviarFormulario);
  


