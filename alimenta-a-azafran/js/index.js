//VARIABLES INICIALES
let canvas;
let ctx;
let vidas=7;
let puntos=0;
let gameOver=false;
let acelerar=0;
let nivel=0;

//VARIABLES imgES
let imgAzafranUno=new Image();
let imgAzafranComidaMala=new Image();
let imgAzafranEnfermo=new Image();
let imgAzafranFeliz=new Image();

let imgComidaCatnip=new Image();
let imgComidaCarne=new Image();
let imgComidaChocolate=new Image();
let imgComidaHelado=new Image();
let imgComidaPez=new Image();
let imgComidaPollo=new Image();
let imgComidaPizza=new Image();
let imgBolaDePelo=new Image();

let imgVidaLlena=new Image();
let imgVidaVacia=new Image();

let imgBotonJugar=new Image();
let imgBotonPersonaje=new Image();
let imgBotonInstrucciones=new Image();
let imgBotonReintentar=new Image();

// VARIABLES SONIDOS
let audioPuntos
let audioVidas
let audioPerdida

//OBJETOS: COMIDAS Y EL GATITO AZAFRAN
let azafranGatito = new Azafran(imgAzafranUno,425,307,100,100, false);
let comidaCarne = new Comida(imgComidaCarne,0,0,53,43,"buena");
comidaCarne.sortear();
let comidaChocolate = new Comida(imgComidaChocolate,0,0,46,60,"mala");
comidaChocolate.sortear();
let comidaHelado = new Comida(imgComidaHelado,0,0,32,60,"mala");
comidaHelado.sortear();
let comidaPez = new Comida(imgComidaPez,0,0,70,49,"buena");
comidaPez.sortear();
let comidaPollo = new Comida(imgComidaPollo,0,0,52,50,"buena");
comidaPollo.sortear();
let comidaPizza = new Comida(imgComidaPizza,0,0,59,68,"mala");
comidaPizza.sortear();
let comidaCatnip = new Comida(imgComidaCatnip,0,0,30,30,"catnip");
comidaCatnip.sortear();
let bolaDePelo = new Comida(imgBolaDePelo,0,0,30,30,"mala");
bolaDePelo.sortear();

//OBJETOS BOTONES
let botonJugar=new Boton(imgBotonJugar,373,120,120,90);
let botonPersonaje=new Boton(imgBotonPersonaje,343,210,180,70);
let botonInstrucciones=new Boton(imgBotonInstrucciones,333,280,200,60);
let botonReintentar=new Boton(imgBotonReintentar,333,260,176,70)

// CARGA DE CANVAS
window.onload=function(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    
    // DIBUJAR OBJETOS
    // 1. Azafran
    imgAzafranUno.src="img/azafran.png";
    imgAzafranUno.onload=function(){
        azafranGatito.dibujar();
    }
    imgAzafranComidaMala.src="img/azafran-comida-mala.png";// 1b. Azafran Comida Mala
    imgAzafranEnfermo.src="img/azafran-enfermo.png";// 1c. Azafran Enfermo
    imgAzafranFeliz.src="img/azafran-feliz.png";// 1d. Azafran Feliz
    // 2. Carne
    imgComidaCarne.src="img/carne.png";
    imgComidaCarne.onload=function(){
        comidaCarne.dibujar();
    }
    // 3. Chocolate
    imgComidaChocolate.src="img/chocolate.png";
    imgComidaChocolate.onload=function(){
        comidaChocolate.dibujar();
    }
    // 4. Helado
    imgComidaHelado.src="img/helado.png";
    imgComidaHelado.onload=function(){
        comidaHelado.dibujar();
    }
    // 5. Pez
    imgComidaPez.src="img/pez.png";
    imgComidaPez.onload=function(){
        comidaPez.dibujar();
    }
    // 6. Pizza 
    imgComidaPizza.src="img/pizza.png";
    imgComidaPizza.onload=function(){
        comidaPizza.dibujar();
    }
    // 7. Pollo
    imgComidaPollo.src="img/pollo.png";
    imgComidaPollo.onload=function(){
        comidaPollo.dibujar();
    }
    // 8. Catnip
    imgComidaCatnip.src="img/hierba.png";
    imgComidaCatnip.onload=function(){
        comidaCatnip.dibujar();
    }
    // 9. Bola de Pelo
    imgBolaDePelo.src="img/bola-de-pelo.png";
    imgBolaDePelo.onload=function(){
        bolaDePelo.dibujar();
    }
    //10. Vida Vacia
    imgVidaVacia.src="img/corazon-vacio.png";
    imgVidaVacia.onload=function(){
        dibujarVida();
    }
    //11. Vida Llena
    imgVidaLlena.src="img/corazon-lleno.png";
    imgVidaLlena.onload=function(){
        dibujarVida();
    }
    //12. Boton Jugar
    imgBotonJugar.src="img/boton-jugar.png";
    imgBotonJugar.onload=function(){
        botonJugar.dibujarBoton();
    }
    //13. Boton Personaje
    imgBotonPersonaje.src="img/boton-personaje.png";
    imgBotonPersonaje.onload=function(){
        botonPersonaje.dibujarBoton();
    }
    //14. Boton Instrucciones
    imgBotonInstrucciones.src="img/boton-instrucciones.png";
    imgBotonInstrucciones.onload=function(){
        botonInstrucciones.dibujarBoton();
    }
    //15. Boton Reintentar
    imgBotonReintentar.src="img/boton-reintentar.png";

    //Audios
    audioPuntos= new Audio();
    audioPuntos.src="audios/comida-buena.mp3";

    audioPerdida= new Audio();
    audioPerdida.src="audios/perder.mp3";

    audioVidas= new Audio();
    audioVidas.src="audios/comida-mala.mp3";
    audioVidas.volume=0.5;

    // DEFINIR INTERVALO
    setInterval(function(){
        if(nivel==0){
            //MENU INICIO
            canvas.style.backgroundImage="url(img/fondo-menu.png)";
            ctx.font="40px Consolas"
            ctx.fillText("ALIMENTÁ A ZAFRÁN",250,100);
            botonJugar.dibujarBoton();
            botonPersonaje.dibujarBoton();
            botonInstrucciones.dibujarBoton();

        }else if(nivel==1 && vidas>0){
            canvas.style.backgroundImage="url(img/casa.jpg)";
            comidaCarne.caer();
            comidaChocolate.caer();
            comidaHelado.caer();
            comidaPez.caer();
            comidaPizza.caer();
            comidaPollo.caer();
            comidaCatnip.caer();
            bolaDePelo.caer();
        
            comidaCarne.colision();
            comidaChocolate.colision();
            comidaHelado.colision();
            comidaPez.colision();
            comidaPizza.colision();
            comidaPollo.colision();
            comidaCatnip.colision();
            bolaDePelo.colision();

            redibujarTodo();

            //PREGUNTA CONSTANTEMENTE SI LLEGO A 100 PUNTOS, CUANDO LLEGA ACELARA 1 EN VELOCIDAD
            if(acelerar>=100){
                comidaCarne.velCaida+=1;
                comidaCatnip.velCaida+=1;
                comidaChocolate.velCaida+=1;
                comidaHelado.velCaida+=1;
                comidaPez.velCaida+=1;
                comidaPizza.velCaida+=1;
                comidaPollo.velCaida+=1;
                bolaDePelo.velCaida+=1;
                acelerar=0;
            }
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
            botonReintentar.dibujarBoton();
        }
    },1000/24);
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
        if(this.catnip==false && this.x>=-25){//en caso de que su estado sea normal
            this.x-=7;
        }else if(this.catnip==true && this.x<=775){//en caso de que haya comido catnip
            this.x+=3;
        }
    }
    this.movDer = function(){
        if(this.catnip==false && this.x<=775){//en caso de que su estado sea normal
            this.x+=7;
        }else if(this.catnip==true && this.x>=-25){//en caso de que haya comido catnip
            this.x-=3;
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
    this.velCaida=5;
    
    this.dibujar=function(){
        ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
    }
    // Caida
    this.caer=function(){
        if(this.y<600){
        this.y+=this.velCaida;
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
        if(this.y+this.alto>=(azafranGatito.y+15) &&
        this.y<=(azafranGatito.y+azafranGatito.alto-12) &&
        this.x+this.ancho>=(azafranGatito.x+26) &&
        this.x<=(azafranGatito.x+azafranGatito.ancho-26)) 
        {
            switch(this.tipo){
                case "buena":
                    puntos+=10;
                    acelerar+=10;
                    audioPuntos.play();
                    if(azafranGatito.catnip==false){
                        azafranGatito.img=imgAzafranFeliz;
                        setTimeout(() => {
                        azafranGatito.img=imgAzafranUno;
                        },1500);
                    }
                    break;
                case "mala":
                    vidas--;
                    audioVidas.play();
                    if(azafranGatito.catnip==false){
                        azafranGatito.img=imgAzafranComidaMala;
                        setTimeout(() => {
                        azafranGatito.img=imgAzafranUno;   
                        },1500);
                    };
                    break;
                case "catnip":
                    azafranGatito.catnip=true;
                    setTimeout(() => {
                        azafranGatito.catnip=false;
                    }, 5000);
                    azafranGatito.img=imgAzafranEnfermo;
                    setTimeout(()=> {
                        azafranGatito.img=imgAzafranUno;
                    },5000);
                    break;
            } 
            this.sortear();
        }
    }
}
// 3. BOTON
function Boton(img,x,y,ancho,alto){
    this.img=img;
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;

    this.dibujarBoton=function(){
        ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
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

//ESCUCHADOR DE EVENTOS DE MOUSE
document.addEventListener("click",function(e){
    //X e Y ya no dependen de la posicion del canvas en la pagina
    let rect=canvas.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;
    
    if(nivel==0){ 
        //BOTON JUGAR
        if(x>botonJugar.x & 
        x<botonJugar.x+botonJugar.ancho & 
        y>botonJugar.y & 
        y<botonJugar.y+botonJugar.alto){
            nivel=1;
        }
    }else if(vidas==0){
        if(x>botonReintentar.x & 
        x<botonReintentar.x+botonReintentar.ancho & 
        y>botonReintentar.y & 
        y<botonReintentar.y+botonReintentar.alto){
            vidas=7;
            puntos=0;
        }
    }
});

//DIBUJA LOS TEXTOS
function dibujarTextos(){
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
}

// REDIBUJAR TODO
function redibujarTodo(){
    ctx.clearRect(0,0,850,400);
    ctx.font="20px Impact";
    ctx.fillStyle="black";
    ctx.fillText("Vidas: "+vidas,130,30);
    ctx.fillText("Puntos: "+puntos,210,30);
    azafranGatito.dibujar();
    comidaCarne.dibujar();
    comidaChocolate.dibujar();
    comidaHelado.dibujar();
    comidaPez.dibujar();
    comidaPizza.dibujar();
    comidaPollo.dibujar();
    comidaCatnip.dibujar();
    bolaDePelo.dibujar();
    dibujarVida(); //esto es de la variable vida
}

//DIBUJA LOS CORAZONES VACIOS Y LLENOS
function dibujarVida(){
    if(nivel==1){
        for(j=0;j<=6;j++){
            ctx.drawImage(imgVidaVacia,600+(30*j),15,30,30);
        };
        for(i=0;i<=vidas-1;i++){
            ctx.drawImage(imgVidaLlena,600+(30*i),15,30,30);
        };
    }
}

