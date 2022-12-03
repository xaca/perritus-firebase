/*En esta carpeta ponemos las funciones comunes al TV y al jugador*/

function cambiarSeccion(actual, siguiente) {
    if(actual){
        actual.classList.add("ocultar");
    }
    siguiente.classList.remove("ocultar");
}

function obtenerParametro() {
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let params_arr;

    if (paramString) {
        params_arr = paramString.split('&');
        for (let i = 0; i < params_arr.length; i++) {
            let pair = params_arr[i].split('=');
            //console.log("Key is:", pair[0]);
            //console.log("Value is:", pair[1]);
            if (pair[0] == "usr") {
                return pair[1];
            }
        }
    }
    else {
        console.log("La URL del jugador esta mal formada");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearNumeroAleatorio() {
    return parseInt(Math.round(Math.random() * 10));
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function generarPIN() {
    return `${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}`;
}

function rotarVideosPrehome() {
    id_rotador_videos = setInterval(function () {
        contador_videos = (contador_videos + 1 < fondos.length) ? contador_videos + 1 : 0;
        ventana_prehome.style.backgroundImage = `url(${ruta_imagenes + fondos[contador_videos]})`;
        ventana_prehome.style.color = contador_videos % 2 == 0 ? "#eddd00" : "white";
    }, 4000);
}

function crearEnlaces(data) {
    let html = "";

    for (var i = 1; i < data.total_jugadores; i++) {
        html += `<button onclick="${url}?usr=${i}">Jugador ${i}</button><br>`;
    }
    return html;
}

function mensaje(data) {

    const btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
    const mensaje = document.querySelector("#ventana p");
    const titulo = document.querySelector("#ventana h1");
    const imagen = document.querySelector("#ventana span");
    const ventana = document.querySelector("#ventana .contenido-ventana");
    btn_cerrar_modal.addEventListener("click", cerrarModal);
    
    imagen.innerHTML = data.emoji;
    btn_cerrar_modal.innerHTML = data.texto_boton;
    titulo.innerHTML = data.titulo;
    mensaje.innerHTML = data.texto_mensaje;
    titulo.classList.add(data.color_texto);
    btn_cerrar_modal.classList.add(data.color_texto, data.color_borde);
    ventana.classList.add(data.color_borde_ventana);
    abrirModal();
}

function abrirModal() {
    const ventana = document.getElementById("ventana");
    ventana.classList.remove("ocultar");
}

function cerrarModal(evento) {
    //location.href = "login.html";
    const ventana = document.getElementById("ventana");
    ventana.classList.add("ocultar");
}

function calcularPorcentajes(){
    let opciones = [];
    opciones.push([12,25,16,47]);
    opciones.push([10,37,29,24]);
    opciones.push([21,36,28,15]);
    opciones.push([7,38,25,30]);
    opciones.push([38,8,27,27]);
    return opciones[getRandomInt(0,opciones.length)];
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}