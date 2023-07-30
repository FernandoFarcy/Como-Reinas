

const datos = { 
    nombre: "",
    email: "",
    mensaje: "",

}
const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombreInput.addEventListener("input", leerTexto);
emailInput.addEventListener("input", leerTexto);
mensajeInput.addEventListener("input", leerTexto);


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const { nombre, email, mensaje } = datos;
    if(nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return; 
    }else {
        mostrarAlerta("Mensaje enviado con éxito");
        return;
    }          

});

function leerTexto(e) {

    datos[e.target.id] = e.target.value;
    console.log(datos);

}


function mostrarAlerta(mensaje, error = null) {

    const alerta = document.createElement("P");
  
    alerta.textContent = mensaje;
    
    if(error){    
        alerta.classList.add("p__error")
    } else {          alerta.classList.add("p__exito")
    }
    
    formulario.appendChild(alerta);

    setTimeout(() =>{ 
        alerta.remove("p");
    }, 4000);
}
