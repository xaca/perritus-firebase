let btn_cerrar;
let ruta_imagenes = "img/";
let avatars = [];
let competidores = [];
let imgs = ["00_bici.png", "01_bici.png", "02_bici.png", "03_bici.png", "04_bici.png", "05_bici.png", "06_bici.png"];
let ventana_prehome, ventana_carrera, contador_videos = 0, ventana_popup,usuarios_conectados;
let cont = 0, posicion = 1;
let lista_top = new Set();

function init_carrera() {
	//crearVariables();
}

function crearLogicaPrehome() {
	crearImagenes();
	cambiarSeccion(ventana_prehome, ventana_carrera);
	//clearInterval(id_rotador_videos);
}

function cerrarVentana() {
	/*var ventana = document.getElementById("popupTop");
	ventana.classList.add("ocultar");*/
	window.location.reload(true);
}

function llenarTop(data){

	let top = document.querySelector(".tabla_posiciones");
	let html = "", fila,item, usuarios

	usuarios = data;
    //usuarios.length
	for(var i=0;i<10;i++)
	{
		fila = usuarios[i];
		if(fila)
		{
			item = `
			<div class="posicion tabla_item_${i+1} ${(i%2==0)?"fila_amarilla":"fila_blanca"}">
				<span>${capitalize(fila.nickname.substring(0,10))}</span>
				<span>${fila.total}</span>
			</div>`;
			html += item;
		}
	}
    top.innerHTML += html;
    
    //openVentana();     
}

function openVentana() {
	ventana_popup.classList.remove("ocultar");
}

function crearVariables() {
	ventana_prehome = document.getElementById('prehome');
	ventana_carrera = document.getElementById('carrera');
	ventana_popup = document.getElementById('popupTop');
	usuarios_conectados = document.getElementById("usuarios_conectados");
	btn_cerrar = document.getElementById('closeBtn');
	btn_cerrar.addEventListener("click",cerrarVentana);

}