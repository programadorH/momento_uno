import {validar} from "./validar"
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "abc123";
const INTENTOS_MAXIMOS = 3;
let intentosActuales = 0;

while (intentosActuales < INTENTOS_MAXIMOS){
    let usuario = prompt(`Ingresa tu usuario`);
    let contrasena = prompt(`Ingresa tu contraseña`);
   
    intentosActuales++;
    
    if(validar (usuario, contrasena)){

    }else{
        
    }

}


validar (usuario, contrasena)