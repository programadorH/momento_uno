export function validar(usuario, contrasena, usuarioCorrecto, contrasenaCorrecta){
    return (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta);
}

export function mensaje(accesoConcedido, intentosActuales, intentosMaximos){
    
    if(accesoConcedido){
        alert(`Bienvenido al sistema`);

    } else if(intentosActuales < intentosMaximos) {
        alert(`Datos incorrectos, intento ${intentosActuales} de ${intentosMaximos}`);

    }else{
        alert(`Usuario Bloqueado , superado el máximo numero de intentos`);
    }
}