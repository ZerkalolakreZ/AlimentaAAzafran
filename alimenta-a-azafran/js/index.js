//VARIABLES INICIALES
let canvas;
let ctx;
let vidas=7;
let puntos=0;
let gameOver=false;
let acelerar=0;
let nivel=0;
let fuente;
let personajeSeleccionado=1; // 1=Azafran1, 2=Azafran2, 3=Azafran3, 4=Azafran4
let puntajeGuardado=false;
let contador=0;

//VARIABLES imgES
//Imagenes Azafran 1
let imgAzafranUno=new Image();
let imgAzafranComidaMala=new Image();
let imgAzafranEnfermo=new Image();
let imgAzafranFeliz=new Image();

//Imagenes Azafran 2
let imgAzafranDos=new Image();
let imgAzafranDosComidaMala=new Image();
let imgAzafranDosEnfermo=new Image();
let imgAzafranDosFeliz=new Image();

//Imagenes Azafran 3
let imgAzafranTres=new Image();
let imgAzafranTresComidaMala=new Image();
let imgAzafranTresEnfermo=new Image();
let imgAzafranTresFeliz=new Image();

//Imagenes Azafran 4
let imgAzafranCuatro=new Image();
let imgAzafranCuatroComidaMala=new Image();
let imgAzafranCuatroEnfermo=new Image();
let imgAzafranCuatroFeliz=new Image();

//Imagenes Comida
let imgComidaCatnip=new Image();
let imgComidaCarne=new Image();
let imgComidaChocolate=new Image();
let imgComidaHelado=new Image();
let imgComidaPez=new Image();
let imgComidaPollo=new Image();
let imgComidaPizza=new Image();
let imgBolaDePelo=new Image();

//Imagenes Vida
let imgVidaLlena=new Image();
let imgVidaVacia=new Image();

//Imagenes Botones
let imgBotonJugar=new Image();
let imgBotonPersonaje=new Image();
let imgBotonInstrucciones=new Image();
let imgBotonReintentar=new Image();
let imgBotonMenu=new Image();
let imgBotonRanking= new Image();
let imgManoMenu = new Image();
let imgBotonComenzar = new Image();

// VARIABLES SONIDOS
let audioPuntos
let audioVidas
let audioPerdida
let audioMenu
let audioJuego
let audioHierba

//OBJETOS: GATITO AZAFRAN
let azafranGatito = new Azafran(imgAzafranUno,425,307,90,100, false);

//OBJETOS: COMIDAS
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

//OBJETOS: BOTONES
let botonJugar=new Boton(imgBotonJugar,280,120,300,70);
let botonPersonaje=new Boton(imgBotonPersonaje,280,180,300,70);
let botonInstrucciones=new Boton(imgBotonInstrucciones,280,240,300,70);
let botonReintentar=new Boton(imgBotonReintentar,100,300,300,70);
let botonMenu=new Boton(imgBotonMenu,280,320,300,70);
let botonRanking = new Boton(imgBotonRanking, 280, 300, 300, 70);
let botonComenzar = new Boton(imgBotonComenzar, 280, 260, 300, 70);
let manoMenu = new Boton(imgManoMenu,botonJugar.x-70,botonJugar.y,60,60);

//OBJETOS: BOTONES PERSONAJES
let botonAzafran1=new Boton(imgAzafranUno,160,150,100,100);
let botonAzafran2=new Boton(imgAzafranDos,310,150,100,100);
let botonAzafran3=new Boton(imgAzafranTres,460,150,100,100);
let botonAzafran4=new Boton(imgAzafranCuatro,610,150,100,100);

// CARGA DE CANVAS
window.onload=function(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    
    // DIBUJAR OBJETOS
    // 1. Azafran 1
    imgAzafranUno.src="img/azafran.png";
    imgAzafranUno.onload=function(){
        azafranGatito.dibujar();
    }
    imgAzafranComidaMala.src="img/azafran-comida-mala.png";
    imgAzafranEnfermo.src="img/azafran-enfermo.png";
    imgAzafranFeliz.src="img/azafran-feliz.png";
    
    // 2. Azafran 2
    imgAzafranDos.src="img/azafran-dos.png";
    imgAzafranDosComidaMala.src="img/azafran-dos-comida-mala.png";
    imgAzafranDosEnfermo.src="img/azafran-dos-enfermo.png";
    imgAzafranDosFeliz.src="img/azafran-dos-feliz.png";
    
    // 3. Azafran 3
    imgAzafranTres.src="img/azafran-tres.png";
    imgAzafranTresComidaMala.src="img/azafran-tres-comida-mala.png";
    imgAzafranTresEnfermo.src="img/azafran-tres-enfermo.png";
    imgAzafranTresFeliz.src="img/azafran-tres-feliz.png";
    
    // 4. Azafran 4
    imgAzafranCuatro.src="img/azafran-cuatro.png";
    imgAzafranCuatroComidaMala.src="img/azafran-cuatro-comida-mala.png";
    imgAzafranCuatroEnfermo.src="img/azafran-cuatro-enfermo.png";
    imgAzafranCuatroFeliz.src="img/azafran-cuatro-feliz.png";
    
    // 5. Carne
    imgComidaCarne.src="img/carne.png";
    imgComidaCarne.onload=function(){
        comidaCarne.dibujar();
    }
    // 6. Chocolate
    imgComidaChocolate.src="img/chocolate.png";
    imgComidaChocolate.onload=function(){
        comidaChocolate.dibujar();
    }
    // 7. Helado
    imgComidaHelado.src="img/helado.png";
    imgComidaHelado.onload=function(){
        comidaHelado.dibujar();
    }
    // 8. Pez
    imgComidaPez.src="img/pez.png";
    imgComidaPez.onload=function(){
        comidaPez.dibujar();
    }
    // 9. Pizza 
    imgComidaPizza.src="img/pizza.png";
    imgComidaPizza.onload=function(){
        comidaPizza.dibujar();
    }
    // 10. Pollo
    imgComidaPollo.src="img/pollo.png";
    imgComidaPollo.onload=function(){
        comidaPollo.dibujar();
    }
    // 11. Catnip
    imgComidaCatnip.src="img/hierba.png";
    imgComidaCatnip.onload=function(){
        comidaCatnip.dibujar();
    }
    // 12. Bola de Pelo
    imgBolaDePelo.src="img/bola-de-pelo.png";
    imgBolaDePelo.onload=function(){
        bolaDePelo.dibujar();
    }
    //13. Vida Vacia
    imgVidaVacia.src="img/corazon-vacio.png";
    imgVidaVacia.onload=function(){
        dibujarVida();
    }
    //14. Vida Llena
    imgVidaLlena.src="img/corazon-lleno.png";
    imgVidaLlena.onload=function(){
        dibujarVida();
    }
    //15. Boton Jugar
    imgBotonJugar.src="img/boton-jugar.png";
    imgBotonJugar.onload=function(){
        botonJugar.dibujarBoton();
    }
    //16. Boton Personaje
    imgBotonPersonaje.src="img/boton-menu.png";
    imgBotonPersonaje.onload=function(){
        botonPersonaje.dibujarBoton();
    }
    //17. Boton Instrucciones
    imgBotonInstrucciones.src="img/boton-instrucciones.png";
    imgBotonInstrucciones.onload=function(){
        botonInstrucciones.dibujarBoton();
    }
    //18. Boton Reintentar
    imgBotonReintentar.src="img/boton-reintentar.png";
    imgBotonMenu.src="img/boton-menu.png";

    //19. Boton Ranking
    imgBotonRanking.src="img/boton-ranking.png";
    imgBotonRanking.onload=function(){
        botonRanking.dibujarBoton();
    }
    //20. Mano Menu
    imgManoMenu.src="img/mano-menu.png";
    imgManoMenu.onload=function(){
        manoMenu.dibujarBoton();
    };
    //21. Boton Comenzar (nuevo)
    imgBotonComenzar.src="img/boton-jugar.png";
    imgBotonComenzar.onload=function(){
        botonComenzar.dibujarBoton();
    };
    
    //Audios
    audioPuntos= new Audio();
    audioPuntos.src="audios/comida-buena.mp3";

    audioPerdida= new Audio();
    audioPerdida.src="audios/perder.mp3";

    audioVidas= new Audio();
    audioVidas.src="audios/comida-mala.mp3";
    audioVidas.volume=0.5;
    
    audioMenu= new Audio();
    audioMenu.src="audios/menu.mp3";

    audioHierba= new Audio();
    audioHierba.src="audios/hierba.mp3";
    audioHierba.volume=0.5;

    audioJuego= new Audio();
    audioJuego.src="audios/juego.mp3";
    audioJuego.volume=0.3;
    
    //Fonts
    fuente= new FontFace("minecraft","url(fonts/Minecraft.ttf)");
    document.fonts.add(fuente);
    fuente.load();

    // DEFINIR INTERVALO
    setInterval(function(){
        if(nivel==0){
            //MENU INICIO
            ctx.clearRect(0,0,850,400);
            canvas.style.backgroundImage="url(img/menu.jpg)";
            botonJugar.dibujarBoton();
            botonInstrucciones.dibujarBoton();
            botonRanking.dibujarBoton();
            manoMenu.dibujarBoton();
            audioMenu.play();
            audioJuego.pause();
            audioPerdida.pause();            

        }else if(nivel==1){
            //MENU SELECCION PERSONAJE
            ctx.clearRect(0,0,850,400);
            canvas.style.backgroundImage="url(img/menu-gatitos.jpg)";
            
            //Dibujar botones de personajes
            botonAzafran1.dibujarBoton();
            botonAzafran2.dibujarBoton();
            botonAzafran3.dibujarBoton();
            botonAzafran4.dibujarBoton();
            
            //Dibujar botón comenzar y volver
            botonComenzar.dibujarBoton();
            botonMenu.dibujarBoton();
        
        }else if(nivel==2 && vidas>0){
            //JUEGO PRINCIPAL
            ctx.clearRect(0,0,850,400);
            canvas.style.backgroundImage="url(img/casa.png)";
            audioJuego.play();
            audioMenu.pause();
            audioPerdida.pause();

            contador++;

            if(contador<73){
                comidaCarne.caer();
            }else if(contador>72 && contador<121){
                comidaCarne.caer();
                comidaChocolate.caer();
            }else if(contador>120 && contador<241){
                comidaCarne.caer();
                comidaChocolate.caer();
                comidaHelado.caer();
                comidaPez.caer();
            }else{
                comidaCarne.caer();
                comidaChocolate.caer();
                comidaHelado.caer();
                comidaPez.caer();
                comidaPizza.caer();
                comidaPollo.caer();
                comidaCatnip.caer();
                bolaDePelo.caer();
            }

            comidaCarne.colision();
            comidaChocolate.colision();
            comidaHelado.colision();
            comidaPez.colision();
            comidaPizza.colision();
            comidaPollo.colision();
            comidaCatnip.colision();
            bolaDePelo.colision();

            redibujarTodo();

            if(acelerar>=100){
                comidaCarne.velCaida+=2;
                comidaCatnip.velCaida+=2;
                comidaChocolate.velCaida+=2;
                comidaHelado.velCaida+=2;
                comidaPez.velCaida+=2;
                comidaPizza.velCaida+=2;
                comidaPollo.velCaida+=2;
                bolaDePelo.velCaida+=2;
                acelerar=0;
            }
        }else if(nivel==3){
            //MENU INSTRUCCIONES
            ctx.clearRect(0,0,850,400);
            canvas.style.backgroundImage="url(img/instrucciones.jpg)";
            botonMenu.dibujarBoton();
        }else if(nivel==4){
            // RANKING
            ctx.clearRect(0,0,850,400);
            canvas.style.backgroundImage="url(img/ranking.jpg)";
            mostrarRanking();
            botonMenu.dibujarBoton();
        }else{
            // GAME OVER
            canvas.style.backgroundImage="url(img/game-over.jpg)";
            ctx.clearRect(0,0,850,400);
            // puntaje
            ctx.font="30px minecraft";
            ctx.fillStyle= "white";
            ctx.fillText("Puntos: "+puntos,650,50);
            if(!puntajeGuardado){
                guardarEnRanking(puntos);
                puntajeGuardado=true;
            }
            audioJuego.pause();
            audioPerdida.play();
            botonReintentar.dibujarBoton();
            botonMenu.dibujarBoton();
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
            this.x+=2;
        }
    }
    this.movDer = function(){
        if(this.catnip==false && this.x<=775){//en caso de que su estado sea normal
            this.x+=7;
        }else if(this.catnip==true && this.x>=-25){//en caso de que haya comido catnip
            this.x-=2;
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
        this.y=Math.floor(Math.random()*(-70-(-300)+1))+(-300);
    }
    // Colision
    this.colision=function(){
        if(this.y+this.alto>=(azafranGatito.y+20) &&
        this.y<=(azafranGatito.y+azafranGatito.alto-12) &&
        this.x+this.ancho>=(azafranGatito.x+15) &&
        this.x<=(azafranGatito.x+azafranGatito.ancho-26)) 
        {
            switch(this.tipo){
                case "buena":
                    puntos+=10;
                    acelerar+=10;
                    audioPuntos.play();
                    if(azafranGatito.catnip==false){
                        switch(personajeSeleccionado){
                            case 1: azafranGatito.img=imgAzafranFeliz; break;
                            case 2: azafranGatito.img=imgAzafranDosFeliz; break;
                            case 3: azafranGatito.img=imgAzafranTresFeliz; break;
                            case 4: azafranGatito.img=imgAzafranCuatroFeliz; break;
                        }
                        setTimeout(() => {
                            switch(personajeSeleccionado){
                                case 1: azafranGatito.img=imgAzafranUno; break;
                                case 2: azafranGatito.img=imgAzafranDos; break;
                                case 3: azafranGatito.img=imgAzafranTres; break;
                                case 4: azafranGatito.img=imgAzafranCuatro; break;
                            }
                        },1500);
                    }
                    if(puntos%500===0){
                        vidas++;
                    }
                    break;
                case "mala":
                    vidas--;
                    audioVidas.play();
                    if(azafranGatito.catnip==false){
                        switch(personajeSeleccionado){
                            case 1: azafranGatito.img=imgAzafranComidaMala; break;
                            case 2: azafranGatito.img=imgAzafranDosComidaMala; break;
                            case 3: azafranGatito.img=imgAzafranTresComidaMala; break;
                            case 4: azafranGatito.img=imgAzafranCuatroComidaMala; break;
                        }
                        setTimeout(() => {
                            switch(personajeSeleccionado){
                                case 1: azafranGatito.img=imgAzafranUno; break;
                                case 2: azafranGatito.img=imgAzafranDos; break;
                                case 3: azafranGatito.img=imgAzafranTres; break;
                                case 4: azafranGatito.img=imgAzafranCuatro; break;
                            }   
                        },1500);
                    };
                break;
                case "catnip":
                    audioJuego.pause();
                    audioHierba.play();   
                    azafranGatito.catnip=true;
                    switch(personajeSeleccionado){
                        case 1: azafranGatito.img=imgAzafranEnfermo; break;
                        case 2: azafranGatito.img=imgAzafranDosEnfermo; break;
                        case 3: azafranGatito.img=imgAzafranTresEnfermo; break;
                        case 4: azafranGatito.img=imgAzafranCuatroEnfermo; break;
                    }
                    setTimeout(() => {
                        azafranGatito.catnip=false;
                        switch(personajeSeleccionado){
                            case 1: azafranGatito.img=imgAzafranUno; break;
                            case 2: azafranGatito.img=imgAzafranDos; break;
                            case 3: azafranGatito.img=imgAzafranTres; break;
                            case 4: azafranGatito.img=imgAzafranCuatro; break;
                        }
                    }, 8000);
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
    this.escalado=false;

    this.dibujarBoton=function(){
        if(this.escalado){
            let nuevoAncho = this.ancho * 1.25;
            let nuevoAlto = this.alto * 1.25;
            let offsetX = (this.ancho - nuevoAncho)/2;
            let offsetY = (this.alto - nuevoAlto)/2;
            ctx.drawImage(this.img, this.x+offsetX, this.y+offsetY, nuevoAncho, nuevoAlto);
        }else{
            ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
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

// ESCUCHADOR DE EVENTOS DE MOUSE
document.addEventListener("click",function(e){
    let rect=canvas.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;
    
    if(nivel==0){
        //MENU INICIO 
        if(x>botonJugar.x & //BOTON JUGAR
        x<botonJugar.x+botonJugar.ancho & 
        y>botonJugar.y & 
        y<botonJugar.y+botonJugar.alto){
            nivel=1; // Ir a selección de personaje
        }else if(x>botonInstrucciones.x & //BOTON INSTRUCCIONES
        x<botonInstrucciones.x+botonInstrucciones.ancho &
        y>botonInstrucciones.y &
        y<botonInstrucciones.y+botonInstrucciones.alto){
            nivel=3;
        }else if(x>botonRanking.x & //BOTON RANKING
        x<botonRanking.x+botonRanking.ancho &
        y>botonRanking.y &
        y<botonRanking.y+botonRanking.alto){
            nivel=4;
        }
    }else if(nivel==1){
        //MENU PERSONAJES
        botonAzafran1.escalado=false;
        botonAzafran2.escalado=false;
        botonAzafran3.escalado=false;
        botonAzafran4.escalado=false;
        
        //BOTONES PERSONAJES
        if(x>botonAzafran1.x && x<botonAzafran1.x+botonAzafran1.ancho && 
        y>botonAzafran1.y && y<botonAzafran1.y+botonAzafran1.alto){
            personajeSeleccionado=1;
            botonAzafran1.escalado = true;
        }else if(x>botonAzafran2.x && x<botonAzafran2.x+botonAzafran2.ancho && 
                y>botonAzafran2.y && y<botonAzafran2.y+botonAzafran2.alto){
            personajeSeleccionado=2;
            botonAzafran2.escalado = true;
        }else if(x>botonAzafran3.x && x<botonAzafran3.x+botonAzafran3.ancho && 
                y>botonAzafran3.y && y<botonAzafran3.y+botonAzafran3.alto){
            personajeSeleccionado=3;
            botonAzafran3.escalado = true;
        }else if(x>botonAzafran4.x && x<botonAzafran4.x+botonAzafran4.ancho && 
                y>botonAzafran4.y && y<botonAzafran4.y+botonAzafran4.alto){
            personajeSeleccionado=4;
            botonAzafran4.escalado = true;
        }
        
        //BOTON COMENZAR
        if(x>botonComenzar.x && x<botonComenzar.x+botonComenzar.ancho && 
           y>botonComenzar.y && y<botonComenzar.y+botonComenzar.alto){
            nivel=2; // Comenzar juego con personaje seleccionado
            aplicarPersonajeSeleccionado();
        }
        
        //BOTON VOLVER
        if(x>botonMenu.x && x<botonMenu.x+botonMenu.ancho && 
        y>botonMenu.y && y<botonMenu.y+botonMenu.alto){
            nivel=0;
        }
    }else if(nivel==4){
        //RANKING
        if(x>botonMenu.x && x<botonMenu.x+botonMenu.ancho && 
        y>botonMenu.y && y<botonMenu.y+botonMenu.alto){
            nivel=0;
        }
    }else if(nivel==3){
        //INSTRUCCIONES
        if(x>botonMenu.x && x<botonMenu.x+botonMenu.ancho && 
        y>botonMenu.y && y<botonMenu.y+botonMenu.alto){
            nivel=0;
        }
    }else if(vidas==0){
        if(x>botonReintentar.x & //BOTON REINTENTAR
        x<botonReintentar.x+botonReintentar.ancho & 
        y>botonReintentar.y & 
        y<botonReintentar.y+botonReintentar.alto){
            inicioJuego();
        }else if(x>botonMenu.x & //BOTON MENU
        x<botonMenu.x+botonMenu.ancho & 
        y>botonMenu.y & 
        y<botonMenu.y+botonMenu.alto){
            nivel=0;
            inicioJuego();
        }
    }
});

document.addEventListener("mousemove",function(e){
    let rect=canvas.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;
    if(nivel==0){
        if(x>botonJugar.x & //BOTON JUGAR
        x<botonJugar.x+botonJugar.ancho & 
        y>botonJugar.y & 
        y<botonJugar.y+botonJugar.alto){
            manoMenu.x=botonJugar.x-70;
            manoMenu.y=botonJugar.y;
            console.log("estas en el boton jugar");
        }else if(x>botonInstrucciones.x && x<botonInstrucciones.x+botonInstrucciones.ancho &&
                y>botonInstrucciones.y && y<botonInstrucciones.y+botonInstrucciones.alto){
            manoMenu.x=botonInstrucciones.x-70;
            manoMenu.y=botonInstrucciones.y;
        }else if(x > botonRanking.x && x < botonRanking.x + botonRanking.ancho &&
        y > botonRanking.y && y < botonRanking.y + botonRanking.alto){
            manoMenu.x=botonRanking.x-70;
            manoMenu.y=botonRanking.y;
            console.log("estas en el boton ranking");
        }
    }
});


//DIBUJA LOS TEXTOS
function dibujarTextos(){
    ctx.font="20px minecraft";
    ctx.fillStyle="#000000";
    ctx.fillText("Vidas: "+vidas,430,30);
    ctx.fillText("Puntos: "+puntos,510,30);
}

// REDIBUJAR TODO
function redibujarTodo(){
    ctx.clearRect(0,0,850,400);
    ctx.font="20px minecraft";
    ctx.fillStyle="black";
    ctx.fillText("Puntos: "+puntos,130,30);
    azafranGatito.dibujar();
    comidaCarne.dibujar();
    comidaChocolate.dibujar();
    comidaHelado.dibujar();
    comidaPez.dibujar();
    comidaPizza.dibujar();
    comidaPollo.dibujar();
    comidaCatnip.dibujar();
    bolaDePelo.dibujar();
    dibujarVida();
}

//DIBUJA LOS CORAZONES VACIOS Y LLENOS
function dibujarVida(){
    if(nivel==2){
        for(j=0;j<=6;j++){
            ctx.drawImage(imgVidaVacia,600+(30*j),15,30,30);
        };
        for(i=0;i<=vidas-1;i++){
            ctx.drawImage(imgVidaLlena,600+(30*i),15,30,30);
        };
    }
}

//APLICA EL PERSONAJE SELECCIONADO
function aplicarPersonajeSeleccionado(){
    switch(personajeSeleccionado){
        case 1:
            azafranGatito.img=imgAzafranUno;
            imgAzafranFeliz=imgAzafranFeliz;
            imgAzafranEnfermo=imgAzafranEnfermo;
            imgAzafranComidaMala=imgAzafranComidaMala;
            break;
        case 2:
            azafranGatito.img=imgAzafranDos;
            imgAzafranFeliz=imgAzafranDosFeliz;
            imgAzafranEnfermo=imgAzafranDosEnfermo;
            imgAzafranComidaMala=imgAzafranDosComidaMala;
            break;
        case 3:
            azafranGatito.img=imgAzafranTres;
            imgAzafranFeliz=imgAzafranTresFeliz;
            imgAzafranEnfermo=imgAzafranTresEnfermo;
            imgAzafranComidaMala=imgAzafranTresComidaMala;
            break;
        case 4:
            azafranGatito.img=imgAzafranCuatro;
            imgAzafranFeliz=imgAzafranCuatroFeliz;
            imgAzafranEnfermo=imgAzafranCuatroEnfermo;
            imgAzafranComidaMala=imgAzafranCuatroComidaMala;
            break;
    }
}

function inicioJuego(){
    vidas=7;
    puntos=0;
    puntajeGuardado=false;

    azafranGatito.x=425;
    azafranGatito.y=307;
    azafranGatito.catnip=false;

    contador=0;
    acelerar=0;
    comidaCarne.sortear();
    comidaCarne.velCaida=5;
    comidaCatnip.sortear();
    comidaCatnip.velCaida=5;
    comidaChocolate.sortear();
    comidaChocolate.velCaida=5;
    comidaHelado.sortear();
    comidaHelado.velCaida=5;
    comidaPez.sortear();
    comidaPez.velCaida=5;
    comidaPizza.sortear();
    comidaPizza.velCaida=5;
    comidaPollo.sortear();
    comidaPollo.velCaida=5;
    bolaDePelo.sortear();
    bolaDePelo.velCaida=5;
    
    aplicarPersonajeSeleccionado();
}

//RANKING
function guardarEnRanking(puntaje){
    let ranking = JSON.parse(sessionStorage.getItem('ranking')) || [];
    let nuevaEntrada = {
        puntos: puntaje,
        fecha: new Date().toLocaleString()
    };
    if (ranking.length >= 3) {
    ranking = ranking.slice(-2);}
    ranking.push(nuevaEntrada);
    sessionStorage.setItem('ranking', JSON.stringify(ranking));
}

function mostrarRanking(){
    let ranking = JSON.parse(sessionStorage.getItem('ranking')) || [];
    ctx.font = "25px minecraft";
    ctx.fillStyle = "white";
    ctx.fillText("",300,150);

    ranking.forEach((entry, index) => {
        ctx.fillText(`${index + 1}. ${entry.puntos} pts`, 300, 150 + index * 40);
    });
}


