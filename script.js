
let intentos = 6;
let palabra;

let listapalabras = ["APPLE", "MOUSE", "HOUSE", "TRACE"];
let posicion = Math.floor(Math.random() *listapalabras.length);
palabra = listapalabras[posicion];
console.log(palabra);
const button = document.getElementById("guess-button");

button.addEventListener("click", intentar)
let intento;

function intentar(){
    console.log("click!")
    console.log(intento)
    intento = leerIntento();
    mostrarMensaje("");
    if (intento.length != 5){
        mostrarMensaje("<h1>Escriba una palabra de 5 letras</h1> ");
        return
    }
    intentos = intentos - 1;
    console.log("te quedan", intentos);

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    let SPAN;

    for (let i in intento){
        SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = intento[i];
        
        if(palabra[i]===intento[i]){
            SPAN.style.backgroundColor = "#79b851";
            console.log(intento[i],"verde");
        }else if(palabra.includes(intento[i])){
            SPAN.style.backgroundColor = "#f3c237";
            console.log(intento[i],"amarillo");
        }else{
            SPAN.style.backgroundColor = "#a4aec4";
            console.log(intento[i],"gris");
        }
        ROW.appendChild(SPAN);
    }
    console.log(SPAN);
    
    GRID.appendChild(ROW);

    if (intento === palabra){
        console.log("ganaste");
        terminar("<h1>GANASTE!😀</h1>")
    }

    if (intentos == 0){
        console.log("perdiste");
        terminar("<h1>PERDISTE!😖</h1>")
    }    
    }
    


    function leerIntento(){
        const INTENTO = document.getElementById("guess-input").value.toUpperCase();
        console.log(INTENTO);
        return INTENTO;
        
    }

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }

    function mostrarMensaje(mensaje){
        let estado = document.getElementById('guesses');
        estado.innerHTML = mensaje;
    }
    






