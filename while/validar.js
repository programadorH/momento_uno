 export function validar(usuario, contrasena);{
    if(usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA){
       alert(`${usuario} BIENVENIDO AL SISTEMA`)
    }else{
        alert(`Datos incorrectos, intento ${intentosActuales} de ${INTENTOS_MAXIMOS}`)
    }
    
}