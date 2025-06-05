//VARIABLES INICIALES
let canvas;
let ctx;
let vidas=7;
let puntos=0;

//OBJETO IMAGEN
let imgAzafranUno=new Image();

//OBJETOS: COMIDAS Y EL GATITO AZAFRAN
let comidaPollo = new Comida("buena",0,0,100,100);
let azafranGatito = new Azafran(425,300,100,100,imgAzafranUno);

// CARGA DE CANVAS
window.onload=function(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    canvas.style.backgroundImage="url(img/Casa.jpg)";
    canvas.style.backgroundSize="cover";

    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
    
    imgAzafranUno.src="img/Azafran.png";
    imgAzafranUno.onload=function(){
        azafranGatito.dibujar();
    }
}

//CLASES DE LA COMIDA Y GATITOS
function Comida(tipoDeComida,x,y,ancho,alto,imagen){
    this.tipoComida=tipoDeComida; //puede ser buena o mala
    this.posicionX=x;
    this.posicionY=y;
    this.ancho=ancho;
    this.alto=alto;
    this.imagen=imagen;
    this.velCaida=5; //empezara en 5
    
    this.inicio = function(){
       let aleatorio=Math.floor(Math.random()*750);
       this.posicionX=aleatorio;
       this.posicionY=(0);
    }
}

function Azafran(x,y,ancho,alto,imagen){
    this.posX=x;
    this.posY=y;
    this.ancho=ancho;
    this.alto=alto;
    this.imagen=imagen;
    this.estado=true; //true representa normal y false representa mareado
    
    this.movIzq = function(){
        switch (this.estado){
            case true: //en caso de que su estado sea normal
                this.posX-=5;
                console.log(this.posX);
            break;
            case false: //en caso de que este mareado
                this.posX+=5;
                console.log(this.posX);
            break;
        }
    }
    this.movDer = function(){
        switch (this.estado){
            case true: //en caso de que su estado sea normal
                this.posX+=5;
                console.log(this.posX);
            break;
            case false: //en caso de que este mareado
                this.posX-=5;
                console.log(this.posX);
            break;
        }
    }
    this.dibujar=function(){
        ctx.drawImage(this.imagen,this.posX,this.posY,this.ancho,this.alto);
    }
}

//ESCUCHADOR DE EVENTOS DE TECLADO
document.addEventListener("keydown",function(e){
    switch ((e.key).toLocaleLowerCase()){
        case "a":
            azafranGatito.movIzq();
        break;
        case "d":
            azafranGatito.movDer();
        break;
        case " ":
            azafranGatito.estado=false;
            setTimeout(function(){
                azafranGatito.estado=true;
            },7000);
        break;
    }
    ctx.clearRect(0,0,850,400);
    azafranGatito.dibujar();
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
});




/*
document.addEventListener("keydown",function(e){
    let azafran=document.getElementById("azafran");
    let positionX=azafran.offsetLeft;
    azafran.style.position="relative";
    //console.log(e.key);
    switch((e.key).toLocaleLowerCase()){
        case "a":
            azafran.style.left=positionX-20+"px";
            console.log("Ir izquierda");
            break;
        case "d":
            azafran.style.left=positionX+10+"px";
            console.log("Ir derecha");
            break;
        default:
            console.log("Dato invalido, apretaste "+e.key);
        break;
    }
})
*/
function iniciarJuego(){
    console.log("Hiciste click");
}
