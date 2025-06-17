//VARIABLES INICIALES
let canvas;
let ctx;
let vidas=7;
let puntos=0;

//VARIABLES imgES
let imgAzafranUno=new Image();
let imgComidaPollo=new Image();
let imgComidaPizza=new Image();
let imgComidaCatnip=new Image();

//OBJETOS: COMIDAS Y EL GATITO AZAFRAN
let comidaPollo = new Comida("buena",0,0,100,100, imgComidaPollo);
let azafranGatito = new Azafran(425,300,100,100,imgAzafranUno);
let comidaPizza = new Comida("mala",0,0,100,100, imgComidaPizza);
let comidaCatnip = new Comida("catnip",0,0,100,100, imgComidaCatnip)

// CARGA DE CANVAS
window.onload=function(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    canvas.style.backgroundImage="url(img/Casa.jpg)";
    canvas.style.backgroundSize="cover";
    // DIBUJAR OBJETOS
    // 1. Azafran
    imgAzafranUno.src="img/Azafran.png";
    imgAzafranUno.onload=function(){
        azafranGatito.dibujar();
    }
    // 2. Pollo
    imgComidaPizza.src="img/Pollo.png";
    imgComidaPollo.onload=function(){
        comidaPollo.dibujar();
    }
    // 3. Pizza
    imgComidaPizza.src="img/Pizza.png";
    imgComidaPizza.onload=function(){
        comidaPizza.dibujar();
    }
    // 4. Catnip
    imgComidaCatnip.src="img/Sobre.png";
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
        ctx.clearRect(0,0,800,600);
        ctx.font="80 px Impact";
        ctx.fillText("GAME OVER",350,300);
        // puntaje
        ctx.font="30 px Impact";
        ctx.fillText("Puntos: "+puntos,340,300);   
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
function Azafran(x,y,ancho,alto,img){
    this.posX=x;
    this.posY=y;
    this.ancho=ancho;
    this.alto=alto;
    this.img=img;
    this.catnip=false; //true representa mareado y false representa normal
    
    this.dibujar=function(){
        ctx.drawImage(this.img,this.posX,this.posY,this.ancho,this.alto);
    }
    this.movIzq = function(){
        switch (this.catnip){
            case false: //en caso de que su estado sea normal
                this.posX-=5;
                console.log(this.posX);
            break;
            case true: //en caso de que haya comido catnip
                this.posX+=5;
                console.log(this.posX);
            break;
        }
    }
    this.movDer = function(){
        switch (this.catnip){
            case false: //en caso de que su estado sea normal
                this.posX+=5;
                console.log(this.posX);
            break;
            case true: //en caso de que haya comido catnip
                this.posX-=5;
                console.log(this.posX);
            break;
        }
    }
}
// 2. COMIDA
function Comida(tipo,x,y,ancho,alto,img){
    this.tipo=tipo; //puede ser buena, mala o catnip
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.img=img;
    
    this.dibujar=function(){
        ctx.drawImage(this.tipo,this.x,this.y,this.ancho,this.alto,this.img);
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
        if(
              (this.x>azafranGatito.x+this.ancho)
            &&(this.x<azafranGatito.x-azafranGatito.ancho)
            &&(this.y>azafranGatito.y+this.alto)
            &&(this.y<azafranGatito.y-azafranGatito.alto)
        ){
          switch(tipo){
            case "comidaBuena":
                puntos=+10;
            break;
            case "comidaMala":
                vidas--;
            break;
            case "catnip":
                catnip=true;
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
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
}

function iniciarJuego(){
    console.log("Hiciste click");
}
