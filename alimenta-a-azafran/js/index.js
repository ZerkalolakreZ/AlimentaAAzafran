//VARIABLES INICIALES

//MOLDES DE LA COMIDA Y GATITOS
function Comida(tipoDeComida,x,y,velocidadCaida){
    this.tipoComida=tipoDeComida; //puede ser buena o mala
    this.posicionX=x;
    this.posicionY=y;
    this.velCaida=velocidadCaida; //empezara en 5
}

function Azafran(estado,x,y,vida){
    this.estado=estado; //true representa normal y false representa mareado
    this.posX=x;
    this.posY=y
    this.vida=vida;

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
}

//OBJETOS: COMIDAS Y EL GATITO AZAFRAN
let comidaPollo = new Comida("buena",23,23,5);
let azafranGatito = new Azafran(true,414,-80,7);

//ESCUCHADOR DE EVENTOS DE TECLADO
document.addEventListener("keydown",function(e){
    let azafran=document.getElementById("azafran");
    azafran.style.position="relative";
    switch ((e.key).toLocaleLowerCase()){
        case "a":
            azafranGatito.movIzq();
            azafran.style.left=azafranGatito.posX+"px";
        break;
        case "d":
            azafranGatito.movDer();
            azafran.style.left=azafranGatito.posX+"px"
        break;
        case " ":
            azafranGatito.estado= !azafranGatito.estado;
        break;
    }
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