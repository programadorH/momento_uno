export function validar(usuario, contrasena, usuarioCorrecto, contrasenaCorrecta){
    return (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta);
}
export function mensaje(valido, intentosActuales, intentosMaximos){
    if(valido){
        alert(`Bienvenido al sistema`);
    } else if(intentosActuales < intentosMaximos) {
        alert(`Datos incorrectos, intento ${intentosActuales} de ${intentosMaximos}`);
    }else{
        alert(`Usuario Bloqueado , Ha superado el numero de intentos`);
    }
}