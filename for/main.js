import {validar, mensaje} from "./function.js" ;

const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "123456";
const INTENTOS_MAXIMOS = 3;

function validarAcceso(){
    for (let i =1; i <= INTENTOS_MAXIMOS; i++){
        
        let usuario = prompt(`Ingrese el usuario`);
        let contrasena = prompt(`Ingrese la contraseña`);

        let usuarioCorrecto = validar(usuario, contrasena, USUARIO_CORRECTO, CONTRASENA_CORRECTA);
        mensaje( usuarioCorrecto, i, INTENTOS_MAXIMOS);
        
        if(usuarioCorrecto){
        break;
        }
    }
}
 validarAcceso();