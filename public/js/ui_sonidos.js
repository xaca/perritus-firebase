let ui_fx  = [];

function cargarSonidosUI(){
	//Botones
	ui_fx[0] = new Howl({
                src: ["/sonidos/botones/50_50.mp3"],
                preload:true              
            });
	ui_fx[1] = new Howl({
                src: ["/sonidos/botones/aleatorio.mp3"],
                preload:true               
            });
	ui_fx[2] = new Howl({
                src: ["/sonidos/botones/publico.mp3"],
                preload:true               
            });
	ui_fx[3] = new Howl({
                src: ["/sonidos/botones/siguiente_pregunta.mp3"],
                preload:true               
            });
	//Interacción
	ui_fx[4] = new Howl({
                src: ["/sonidos/error.mp3"],
                preload:true               
            });
	ui_fx[5] = new Howl({
                src: ["/sonidos/fin_top.mp3"],
                preload:true               
            });
	ui_fx[6] = new Howl({
                src: ["/sonidos/participacion.mp3"],
                preload:true               
            });
}

function asignarSonidosBotones(botones){
	botones[0].addEventListener("click",()=>{
		ui_fx[1].play();//aleatorio
	});
	botones[1].addEventListener("click",()=>{
		ui_fx[2].play();//publico
	});
	botones[2].addEventListener("click",()=>{
		ui_fx[3].play();//cambio
	});
	botones[3].addEventListener("click",()=>{
		ui_fx[0].play();//50-50
	});
}

function sonidoError(){
	ui_fx[4].play();
}

function sonidoFinCarrera(){
	ui_fx[5].play();
}

function sonidoUIInteraccion(){
	ui_fx[6].play();
}