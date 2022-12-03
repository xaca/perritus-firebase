let pista;
let archivos_pistas = [];

function arregloRutasPistas(){
	archivos_pistas.push("/sonidos/fondo/fun-kids-playful-comic-carefree-game-happy-positive-music-57026.mp3");
	//archivos_pistas.push("/sonidos/fondo/funny-friends-15545.mp3");
	//archivos_pistas.push("/sonidos/fondo/game-comedy-interesting-playful-sweet-bright-childish-music-57040.mp3");
	archivos_pistas.push("/sonidos/fondo/game-music-7408.mp3");
	archivos_pistas.push("/sonidos/fondo/happy-walk-18455.mp3");
	archivos_pistas.push("/sonidos/fondo/hip-hop-rock-beats-118000.mp3");
	archivos_pistas.push("/sonidos/fondo/life-of-a-wandering-wizard-15549.mp3");
	archivos_pistas.push("/sonidos/fondo/childish-prank-21177.mp3");
	archivos_pistas.push("/sonidos/durante-9005.mp3");
	archivos_pistas.push("/sonidos/fondo/swing-110485.mp3");
}

function cargarPista(){
	let rnd;
	arregloRutasPistas();
	rnd = getRandomInt(0,archivos_pistas.length);
	pista = new Howl({
                src: [archivos_pistas[rnd]],
                loop:true,
                preload:true
            });
	pista.play();
}

function detenerPista()
{
	pista.stop();
}