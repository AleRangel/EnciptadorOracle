const mensaje = document.getElementById('msj');

const botonE = document.getElementById('encriptar')
const botonD = document.getElementById('desencriptar');
const salidaMensaje = document.querySelector('.inputOn')



function dectectarMensaje() {       
    mensajeActivo = document.querySelector(".inputOn");
    mensajeNoEncontrado = document.querySelector(".inputEmpty");
    
    if (mensaje.value.length > 0) {
        mensajeNoEncontrado.classList.add("off")
        mensajeActivo.classList.remove("off")
        
    } else {
        mensajeActivo.classList.add("off")
        mensajeNoEncontrado.classList.remove("off")
        
    }    
    
}

mensaje.addEventListener("keyup",(e) =>{
    dectectarMensaje();
    
})


botonE.addEventListener('click', (e) =>{          
    e.preventDefault();
    encriptar();
    
})
botonD.addEventListener('click', (e) =>{
    e.preventDefault();
    desencriptar();
});

function encriptar() {    
    m = mensaje.value;   
     
    const mensajeEncriptado = m.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    console.log(mensajeEncriptado);
    salidaMensaje.children[0].innerHTML = mensajeEncriptado;

    mensaje.value = "";
}

function desencriptar() {
    mensajeEcriptado =  mensaje.value.toLowerCase();    
    const mensajeDesencriptado = mensajeEcriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    console.log(mensajeDesencriptado);
    salidaMensaje.children[0].innerHTML = mensajeDesencriptado;
    mensaje.value = "";
}







