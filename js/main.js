function validateForm(){

	var nombre = document.getElementById("name")
	var apellido = document.getElementById("lastname")
	var correo = document.getElementById("input-email")
	var contra = document.getElementById("input-password")
	var eleccion = document.getElementById("opciones")
	var eleccionVacia = eleccion.options[eleccion.selectedIndex].value

	var regLetras = /^[a-zA-Z]*$/;
	var regMayus = /^[A-Z]{1}/;

	//Campos obligatorios

	if(nombre.value.length < 1){
		var span = document.createElement("span");
			span.innerText = "Escribe tu nombre"
		
	}else if(nombre.value.search(regMayus)){
		alert("La primera letra de tu nombre debe estar en mayúscula")
	}else if(apellido.value.length < 1){
		alert("Escribe tu apellido")
	}else if(apellido.value.search(regMayus)){
		alert("La primera letra de tu apellido debe estar en mayúscula")
	}

	if(correo.value.length < 1){
		alert("Escribe un e-mail")
	}else if(contra.value.length < 1){
		alert("Escribe una contraseña")
	}

	if(eleccionVacia == "0"){
		alert("Seleccione una opción")
	}

	//Campos válidos

	if(nombre.value.search(regLetras) || apellido.value.search(regLetras)){
		alert("Ingresa sólo letras");
	}else if(!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(correo)){
		alert("El correo ingresado debe ser válido");
	}else if(contra.value.length > 1 && contra.value.length < 6){
		alert("La contraseña debe tener al menos 6 caracteres");
	}else{
		if((contra.value == "password" || contra.value == "123456") || contra.value == "098765"){
			alert("La contraseña no puede ser " + contra.value)
		}
	}
}