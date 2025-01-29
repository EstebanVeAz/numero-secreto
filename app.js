let numeroSecreto = 0;
let intento = 0;
let listNumSorteados = [];
let numMax = 10;
//
function asignarTexto(elemento,texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;

    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;
    return;
}
//funcion para generar número secreto
function numSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numMax+1);

    if (listNumSorteados.length == numMax) {

        asignarTexto('p','Ya se sortearon todos los números posibles')
        
    }
else{
    if (listNumSorteados.includes(numeroGenerado)) {
        return numeroGenerado;
    }
    else{
        listNumSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
}
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto ) {
        asignarTexto('p',`acertaste el número secreto en ${intento} ${(intento == 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    //el usuario no acertó
    {
        if (numeroDeUsuario > numeroSecreto) {

            asignarTexto('p','El número secreto es menor')
        }
        else {
            asignarTexto('p','El número secreto es mayor')
        }
        intento ++;
        limpiarCaja()
    }
    return;
}
function parametroInicial() {
 asignarTexto('h1','Juego del número secreto');
 asignarTexto('p',`Ingrese un número entro 1 y ${numMax}`);
  //generar numero secreto
  numeroSecreto = numSecreto();
  //inicializar los intentos
  intento = 1;
}
function reiniciarJuego() {

   //limpiar el input 
   limpiarCaja();
   // reiniciar mensajes
   parametroInicial();
   //deshabilitar boton nuevo juego
   document.getElementById('reiniciar').setAttribute('disabled','true');
}
function limpiarCaja() {
    //se selecciona el input por el id
    document.querySelector('#valorUsuario').value= '';
    
}

asignarTexto('h1','Juego del número secreto');
asignarTexto('p','Ingrese un número entro 1 y 10');


