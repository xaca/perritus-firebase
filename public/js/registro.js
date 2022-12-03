let btn_registrar, frm_registro;

function iniciarRegistro(){
	btn_registrar = document.getElementById("btn_registrar");
	frm_registro = document.getElementById("frm_registro");
	frm_registro.addEventListener("submit",procesarRegistro);
}

function procesarRegistro(evento){

	const correo = document.getElementById("registro_correo");
	const nombre = document.getElementById("registro_nombre");
	const clave = document.getElementById("registro_clave");
	
	evento.preventDefault();

	const usuario = {
		email:correo.value,
		password:clave.value,
		nombre:nombre.value
	};

	document.dispatchEvent(
        new CustomEvent("registrar_usuario",{
            bubles:true,
            detail:{
                data:usuario
            }
        }));
}

function resetearRegistro(){
	frm_registro.reset();
}