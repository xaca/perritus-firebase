let btn_loguear, frm_login;

function iniciarLogin() {
	btn_loguear = document.getElementById("btn_loguear");
	frm_login = document.getElementById("frm_login");
	frm_login.addEventListener("submit", procesarLogin);
}


function procesarLogin(evento) {

	const correo = document.getElementById("login_correo");
	const clave = document.getElementById("login_clave");
	evento.preventDefault();

	document.dispatchEvent(
		new CustomEvent("login_usuario", {
			bubles: true,
			detail: {
				data: {
					email: correo.value,
					password: clave.value
				}
			}
		}));

}

function resetearLogin(){
	frm_login.reset();
}