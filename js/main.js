var nombre = document.getElementById("name");
var apellido = document.getElementById("lastname");
var correo = document.getElementById("input-email");
var contra = document.getElementById("input-password");
var eleccion = document.getElementById("opciones");
var formulario = document.getElementById("formulario");

function display(id){
	id.nextElementSibling.style.display = "inline-block"
}

function validateForm(){

	var regLetras = /^[a-zA-Z]*$/;
	var regMayus = /^[A-Z]{1}/;

	if(nombre.value.length == 0){
		display(nombre)
		nombre.nextElementSibling.innerText = "Ingrese su nombre"
	}else{

		if(nombre.value.search(regMayus)){
			display(nombre)
			nombre.nextElementSibling.innerText = "La primera letra debe estar en mayúscula"
		}else if(nombre.value.search(regLetras)){
			display(nombre)
			nombre.nextElementSibling.innerText = "Verifique su nombre"
		}else{
			nombre.nextElementSibling.style.display = "none"
		}
	}

	if(apellido.value.length == 0){
		display(apellido)
		apellido.nextElementSibling.innerText = "Ingrese su apellido"
	}else{

		if(apellido.value.search(regMayus)){
			display(apellido)
			apellido.nextElementSibling.innerText = "La primera letra debe estar en mayúscula"
		}else if(apellido.value.search(regLetras)){
			display(apellido)
			apellido.nextElementSibling.innerText = "Verifique su apellido"
		}else{
			apellido.nextElementSibling.style.display = "none"
		}
	}

	if(correo.value.length == 0){
		display(correo)
		correo.nextElementSibling.innerText = "Ingrese su e-mail"
	}else{

		if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value)){
			display(correo)
			correo.nextElementSibling.innerText = "Verifique su e-mail"
		}else{
			correo.nextElementSibling.style.display = "none"
		} 
	}

	if(contra.value.length == 0){
		display(contra)
		contra.nextElementSibling.innerText = "Ingrese una contraseña"
	}else{
		if(contra.value.length > 1 && contra.value.length < 6){
			display(contra)
			contra.nextElementSibling.innerText = "La contraseña debe tener al menos 6 caracteres"
		}else{
			if((contra.value == "password" || contra.value == "123456") || contra.value == "098765"){
				display(contra)
				contra.nextElementSibling.innerText = "La contraseña no puede ser " + contra.value
			}else{
				contra.nextElementSibling.style.display = "none"
			}
		}
	}

	if(eleccion.value != "0"){
		eleccion.nextElementSibling.style.display = "none"
	}else if(eleccion.value == "0"){
		display(eleccion)
		eleccion.nextElementSibling.innerText = "Seleccione al menos un tipo de bici"
	}

}