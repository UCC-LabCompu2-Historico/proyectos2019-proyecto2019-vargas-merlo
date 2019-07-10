
 /** <form></form>
  * Funcion operacion realiza el calculo de la hipotenusa y lo muestra en el input correspondiente
  * No permite al usuario ingresas datos al input de la hipotenusa
  * @method operacion
  * @return Hipotenusa
  */


 function operacion() {

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;
    var hip = document.pitagoras.Hipotenusa.value;


    if(hip!==0) { document.pitagoras.Hipotenusa.value=0; } //Para que el usuario no ingrese datos al input de la hipotenusa

    if(catA>0 && catB>0){   //si los datos ingresados son positivos

        var a = Math.pow(catA, 2);
        var b = Math.pow(catB, 2);
        var c = Math.sqrt(a+b);

        document.pitagoras.Hipotenusa.value=c.toFixed(2); //redondeo a dos digitos
        limpiar();
    }

    else {
           if(catA<0) {

               document.pitagoras.Cateto1.value = 0;
               alert("INGRESE NUMEROS POSIIVOS"); //Mensaje de error si cateto1 es negativo
           }
           if(catB<0){

               document.pitagoras.Cateto2.value=0;
               alert("INGRESE NUMEROS POSIIVOS"); //Mensaje de error si cateto2 es negativo
           }
    }

}
/**
 * Grafico del triangulo animado en el canvas, una vez centrado en el liezo el triangulo se rellena y se detiene la funcion
 * @method dibujar
 **/

    function dibujar(){


    var n1 = document.pitagoras.Cateto1.value*10;
    var n2 = document.pitagoras.Cateto2.value*10;
    var n3 = 0;

    //para escalar graficos
    
    if(n1>50) n1=n1/2;
    if(n2>50) n2=n2/2;
    if(n1>100) n1=n1/4;
    if(n2>100) n2=n2/4;

    if(n1>0 && n2>0) {

        id = setInterval(function(){

            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            //Eliminar triangulo anterior
            ctx.clearRect(0,0,canvas.width,canvas.height);

            //Incremento variables

            n1 = (n1 + 1);
            n2 = (n2 + 1);
            n3 = (n3 + 1);

            //Dibujo nuevamente

            ctx.beginPath();
            ctx.moveTo(n2, n3);
            ctx.lineTo(n3, n3);
            ctx.lineTo(n3, n1);
            ctx.closePath();
            ctx.stroke();

            if(n3>80){

                clearInterval(id);
                ctx.fillStyle = "#000" ;
                ctx.beginPath();
                ctx.moveTo(n2, n3);
                ctx.lineTo(n3, n3);
                ctx.lineTo(n3, n1);
                ctx.fill();
                ctx.closePath();
                ctx.stroke();
            }


        },1000/100);

  }

    else{ alert("INGRESE VALORES PARA GRAFICAR");}
}

/**
 * Calculo del area <form></form>
 * Se ejecuta al presionar el boton area y muestra el resultado en el input correspondiente
 * @method area
 * @return area
 * */

function area() {

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;
    var catC = document.pitagoras.Hipotenusa.value;
    

    if(catA>0 && catB>0 && catC>0) {

        document.pitagoras.Area.value = catA * catB / 2;
    }


    else{ alert("POR FAVOR, INGRESE NUMEROS VALIDOS");} //mensaje de error si los datos son numeros negativos

}

/**
 * Calculo del perimetro<form></form>
 * Se ejecuta al presionar el boton perimetro y muestra el resultado en el input correspondiente
 * @method perimetro
 * @return perimetro
 * */


function perimetro(){

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;
    var catC = document.pitagoras.Hipotenusa.value;

    if(catC>0 && catA>0 && catC>0) {

        document.pitagoras.Perimetro.value = parseInt(catA) + parseInt(catB) + parseInt(catC);
    }

    else{ alert("POR FAVOR, INGRESE NUMEROS VALIDOS");} //mensaje de error si los datos son numeros negativos

}

/**
 * Se vuelve al estado inicial del programa
 * @method reiniciar
 */

function reiniciar() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    clearInterval(id); //Detiene animacion


    ctx.clearRect(0,0,canvas.width,canvas.height);

    document.pitagoras.Cateto1.value=0;
    document.pitagoras.Cateto2.value=0;
    document.pitagoras.Hipotenusa.value=0;
    document.pitagoras.Area.value=0;
    document.pitagoras.Perimetro.value=0;
}

 /**
  * Limpia inpunts y canvas en caso de que se modifiquen los datos
  * @method limpiar
  */

function limpiar() {

     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext("2d");
     document.pitagoras.Area.value=" ";
     document.pitagoras.Perimetro.value=" ";
     clearInterval(id);
     ctx.clearRect(0,0,canvas.width,canvas.height);

}
