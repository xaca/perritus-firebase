class DatosJugador{
	constructor(obj){
		if(obj)
		{
			this.partida_actual = obj.partida_actual;
			this.avatars = obj.avatars;
			this.carril_jugador = obj.carril_jugador;
		}
	}
	
	//Busca en los avatars si el jugador existe
	estaEnLaPartida(usr_id){
		return this.avatars.some((id)=>id===usr_id);
	} 
}