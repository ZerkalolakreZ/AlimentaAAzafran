//VARIABLES INICIALES
let canvas;
let ctx;
let vidas=7;
let puntos=0;
let gameOver=false;

//VARIABLES imgES
let imgAzafranUno=new Image();
let imgAzafranComidaMala=new Image();

let imgComidaPollo=new Image();
let imgComidaPizza=new Image();
let imgComidaCatnip=new Image();

//OBJETOS: COMIDAS Y EL GATITO AZAFRAN
let azafranGatito = new Azafran(imgAzafranUno,425,300,100,100, false);
let comidaPollo = new Comida(imgComidaPollo,0,0,33,60,"buena");
comidaPollo.sortear();
let comidaPizza = new Comida(imgComidaPizza,0,0,50,50,"mala");
comidaPizza.sortear();
let comidaCatnip = new Comida(imgComidaCatnip,0,0,50,50,"catnip");
comidaCatnip.sortear();

// CARGA DE CANVAS
window.onload=function(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    canvas.style.backgroundImage="url(img/casa.jpg)";
    // DIBUJAR OBJETOS
    // 1. Azafran
    imgAzafranUno.src="img/azafran.png";
    imgAzafranUno.onload=function(){
        azafranGatito.dibujar();
    }
    // 1b. Azafran comida mala
    imgAzafranComidaMala.src="img/azafran-comida-mala.png";
    imgAzafranComidaMala.onload=function(){
        azafranGatito.dibujar();
    }
    // 2. Pollo
    imgComidaPollo.src="img/pollo.png";
    imgComidaPollo.onload=function(){
        comidaPollo.dibujar();
    }
    // 3. Pizza
    imgComidaPizza.src="img/pizza.png";
    imgComidaPizza.onload=function(){
        comidaPizza.dibujar();
    }
    // 4. Catnip
    imgComidaCatnip.src="img/sobre.png";
    imgComidaCatnip.onload=function(){
        comidaCatnip.dibujar();
    }
    // DEFINIR INTERVALO
    setInterval(function(){
        if(vidas>0){
           comidaPizza.caer();
           comidaPollo.caer();
           comidaCatnip.caer();
           
           comidaPizza.colision();
           comidaPollo.colision();
           comidaCatnip.colision();

           redibujarTodo();
        }else{
        // GAME OVER
        ctx.clearRect(0,0,850,400);
        ctx.font="80px Impact";
        ctx.fillStyle= "red";
        ctx.textAlign="center";
        ctx.fillText("GAME OVER",425,200);
        // puntaje
        ctx.font="30px Impact";
        ctx.fillText("Puntos: "+puntos,425,250);   
        }
    },1000/24);
}
function dibujarTextos(){
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
}

//FUNCIONES Y ATRIBUTOS

// 1. AZAFRAN
function Azafran(img,x,y,ancho,alto,catnip){
    this.img=img;
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.catnip=catnip

    this.dibujar=function(){
        ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
    }
    this.movIzq = function(){
        switch (this.catnip){
            case false: //en caso de que su estado sea normal
                this.x-=5;
                console.log(this.x);
            break;
            case true: //en caso de que haya comido catnip
                this.x+=5;
                console.log(this.x);
            break;
        }
    }
    this.movDer = function(){
        switch (this.catnip){
            case false: //en caso de que su estado sea normal
                this.x+=5;
                console.log(this.x);
            break;
            case true: //en caso de que haya comido catnip
                this.x-=5;
                console.log(this.x);
            break;
        }
    }
}
// 2. COMIDA
function Comida(img,x,y,ancho,alto,tipo){
    this.img=img;
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.tipo=tipo; //puede ser buena, mala o catnip
    
    this.dibujar=function(){
        ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
    }
    // Caida
    this.caer=function(){
        if(this.y<600){
           this.y+=5 
        }else{
            this.sortear();
        }
    }
    // Respawn
    this.sortear=function(){
        this.x=Math.floor(Math.random()*(720-30+1))+30;
        this.y=Math.floor(Math.random()*(-40-(-130)+1))+(-130);
    }
    // Colision
    this.colision=function(){
        if(this.y+this.alto>=azafranGatito.y &&
           this.y<=azafranGatito.y+azafranGatito.alto &&
           this.x+this.ancho>=azafranGatito.x &&
           this.x <=azafranGatito.x+azafranGatito.ancho) 
        {
          switch(this.tipo){
            case "buena":
                puntos+=10;
                break;
            case "mala":
                vidas--;
                azafranGatito.img=imgAzafranComidaMala;
                setTimeout(() => {
                   azafranGatito.img=imgAzafranUno;   
                },1500);
                break;
            case "catnip":
                azafranGatito.catnip=true;
                setTimeout(() => {
                    azafranGatito.catnip=false;
                }, 5000);
                break;
            } 
            this.sortear();
        }
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
    }
})

// REDIBUJAR TODO
function redibujarTodo(){
    ctx.clearRect(0,0,850,400);
    azafranGatito.dibujar();
    comidaPizza.dibujar();
    comidaPollo.dibujar();
    comidaCatnip.dibujar();
    ctx.font="20px Impact";
    ctx.fillStyle="black";
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
}

function iniciarJuego(){
    console.log("Hiciste click");
}
