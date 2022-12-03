let contenedor_pregunta;

window.onload = function () {
    //document.addEventListener("actualizarEstadoAvatar", actualizarAvatars);
}

function cargarDatosAvatar(id) {
    asignarImagen(`img/${bici[id]}`);
    document.dispatchEvent(
        new CustomEvent("actualizar_avatar", {
            bubles: true,
            detail: {
                data: id
            }
        }));
    //cambiarSeccion(ventana_avatar, ventana_competidor);
}