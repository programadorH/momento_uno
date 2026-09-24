import {validar, mensaje} from "./validar.js"
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "abc123";
const INTENTOS_MAXIMOS = 3;


function validarAcceso(){
   let intentosActuales = 0;
   let accesoConcedido = false;
 
   while(intentosActuales < INTENTOS_MAXIMOS && !accesoConcedido){
    
      intentosActuales++;

      let usuario = prompt(`Ingresa tu usuario`);
      let contrasena = prompt(`Ingresa tu contraseña`);

      accesoConcedido = validar(usuario, contrasena, USUARIO_CORRECTO, CONTRASENA_CORRECTA);

      mensaje(accesoConcedido, intentosActuales, INTENTOS_MAXIMOS );

   }
}
validarAcceso();
