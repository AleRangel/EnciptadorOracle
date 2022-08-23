const regEx = {
    sinNumeros : /^[a-z\u00f1\s\,\¿?\¡!]+$/
}


class Encriptador{
    mensaje = document.getElementById("msj");
    bontonEncriptar = document.getElementById("encriptar");
    bontonDesencriptar = document.getElementById("desencriptar");
    botonCopiar = document.getElementById("copiar");
    output = document.querySelector(".inputOn");
    input = document.querySelector(".inputEmpty");
    

    inicializa(){
        this.keyup();
        this.botonC();
        this.botonE();
        this.botonD();
        this.pegar();
    }

    validador(){
        const alertaP = document.querySelector(".input p")
        if (regEx.sinNumeros.test(this.mensaje.value)) {
            alertaP.classList.add("valido");
            alertaP.classList.remove("invalido")
        }else{
            alertaP.classList.remove("valido");
            alertaP.classList.add("invalido")
            
            
        }if (this.mensaje.value.length == 0) {
            alertaP.classList.remove("invalido")
            alertaP.classList.remove("valido");
            
        }
        
    }

    keyup(){
        this.mensaje.addEventListener("keyup", (e) =>{
            this.detectarMensaje();
            this.validador();
        })
    }
    pegar(){
        this.mensaje.addEventListener("paste", (e) =>{
            console.log("xddd");
            this.output.classList.remove("off");
            this.input.classList.add("off");

            this.output.children[0].innerHTML = "";
                     
            
        })
    }
    
    botonC(){
        this.botonCopiar.addEventListener("click", (e) =>{
            const texto = this.output.children[0].textContent;
            navigator.clipboard.writeText(texto).then(() =>{
                alert("Texto copiado con exito")
            })
            .catch(err => {
                alert("Error al copiar el texto, err")
            })
            this.output.classList.add("off");
            this.output.children[1].classList.remove("off");
            this.input.classList.remove("off");
            this.output.children[0].innerHTML = "";
            
            
        })
    }

    botonE(){
        this.bontonEncriptar.addEventListener("click",(e)=>{
            this.encriptar();
        });
    }
    botonD(){
        this.bontonDesencriptar.addEventListener("click",(e)=>{
            this.desencriptar();
            console.log(this.mensaje);
        });
    }
    
    encriptar(){
        const mensajeEncriptado = this.mensaje.value.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        this.mensajeEncriptado = mensajeEncriptado
        this.output.children[0].innerHTML = this.mensajeEncriptado;
        this.output.children[1].classList.add("off")
        this.mensaje.value = "";
    }

    desencriptar(){
        const mensajeEcriptadoX= this.mensaje.value,
        mensajeDesencriptado= mensajeEcriptadoX.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
        console.log(this.mensaje);
        this.output.children[0].innerHTML = mensajeDesencriptado;
        this.output.children[1].classList.add("off");

        this.mensaje.value = "";
    }
   detectarMensaje(){
        if (this.mensaje.value.length > 0) {
            this.output.classList.remove("off");
            this.input.classList.add("off");
            
        } else {
            this.output.classList.add("off");
            this.input.classList.remove("off");
            
        }
        
    }

}


const encriptador = new Encriptador();
console.log(encriptador.mensaje);
encriptador.inicializa();
