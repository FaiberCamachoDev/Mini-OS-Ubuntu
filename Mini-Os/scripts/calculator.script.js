//contiene la operacion o resulatado parcial
let parcial="";

//elemento donde se colocan la operacion que se esta realizando
const operaRealizada = document.getElementById("operacionRealizada");
//elemento donde se coloca el resultado
const textResul = document.getElementById("textResultado");

//ultimo operado seleccionado
let operadorSeleccionado ="";

//numero ingresado
let numero ="";

//para determinar si el ultimo presionado es un numero o una operacion
let ultimoDigitoPresionado="";

function operador(num){
    //Concateno el numero
    numero= numero + num;
    //concateno la operacion hasta el momento
    parcial= parcial + num;
    //Muestro
    operaRealizada.innerHTML = parcial;

    //controlamos la division por 0
    if(numero=='0' && operadorSeleccionado == '/'){
        limpiar();
        textResul.innerHTML="Indefinido";
        return;
    }
    //guardo el tipo de tecla precionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado='numero'
    }  
}
//Detecto cunado preciona una operacion
function operacion(oper){
    if(ultimoDigitoPresionado === 'operacion') return;
    //guardo la operacion que eligio
    operadorSeleccionado =oper;
    //actualizo el tipo de letra presionada
    ultimoDigitoPresionado="operacion";
    //voy armando la formula matematica
    parcial= parcial+oper;
    numero= "";
    operaRealizada.innerHTML=parcial;
}

//realizo el calculo de la formula matematica cuando presiono  =
function calculo(){
    try{
        //con eval evaluo la formula matematica que esta en formato string
    parcial = eval(parcial);
    textResul.innerHTML = parcial;
    //vuelvo a convertir en string por si continua la formula
    parcial = parcial.toString();
    numero="";
    operaRealizada.innerHTML= parcial;
    }catch(e){
        textResul.innerHTML ="Error";
        parcial ="";
        numero ="";
        operadorSeleccionado ="";
    }   
}
//funcion que limpia todo
    function limpiar(){
        parcial ="";
        numero="";
        operadorSeleccionado= "";
        textResul.innerHTML="";        
        operaRealizada.innerHTML="0";
    }
    function borrarUltimo() {
    parcial = parcial.slice(0, -1);
    numero = numero.slice(0, -1);
    operaRealizada.innerHTML= parcial || "0";
  }
   function cambiarSigno(){
    if(numero){
        if(numero.startsWith('-')){
            numero = numero.slice(1);
        }else{
            numero ='-' + numero;
        }
        parcial =parcial.slice(0, -numero.length) + numero;
        operaRealizada.innerHTML = parcial;
    }
   }
   function potencia(){
    if(numero){
        parcial += '**2';
        operaRealizada.innerHTML= parcial;
    }
   }
   function raiz(){
    if(numero){
        parcial= `Math.sqrt(${parcial})`;
        calculo();
    }
   }

   function porcentaje(){
    if(numero){
        parcial += '/100';
        operaRealizada.innerHTML = parcial;
    }
   }