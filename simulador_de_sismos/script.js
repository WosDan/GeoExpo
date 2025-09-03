const tierra = new Image()
const espacio = new Image()
let start = Date.now()

let angle = 180

const angleInput = document.getElementById("angle");
const ctx = document.getElementById("canvas").getContext("2d");


function init(){
    espacio.src = "src/img/espacio.png";
    tierra.src = "src/img/tierra.png";
    window.requestAnimationFrame(draw);
}

function changeAngle(){
    angle = angleInput.value
}

angleInput.addEventListener("input", changeAngle)

function draw(){
    //Limpiado de frame
    ctx.clearRect(0, 0, 1000, 1000)
    
    //Fondo del espacio
    ctx.drawImage(espacio, 0, 0, 1000, 1000)
    
    //Imagen de la tierra
    ctx.drawImage(tierra, 75, 75, 850, 850)
    ctx.save()

    let scycle = ((Date.now() - start)/ 1000 )%4
    
    //Variables para utilizar los métodos,
    //En este caso x1 y y1 hacen las veces de una función racional,
    //Theta1 es el ángulo que da el usuario pero al revés de tal forma que, 
    //Cuando se mueva la función Orbit, esta rote con la función Rot de manera invertida, para que se vea acorde a la orbitación.
    //ThetaOrbit es el ángulo que da el usuario de donde sale el sismo.

    theta1 = -angle*Math.PI/180
    thetaOrbit1 = angle*Math.PI/180;
    
    const funciones = [
        [(scycle)*40, (100/(scycle+10)-10)*40],
        [(scycle)*40, -(scycle)*20],
        [(scycle)*40, -Math.pow(scycle, 2)*20]
    ]
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 2; j++){
            let posorbit = Orbit(500, 500, 225, thetaOrbit1)  
            let pos
            if(j%2==0){
                pos = Rot(funciones[i][0], funciones[i][1], theta1)  
                ctx.translate(posorbit[0] + pos[0], posorbit[1] - pos[1]);      
            }else{
                pos = Rot(funciones[i][0], funciones[i][1], -theta1)  
                ctx.translate(posorbit[0] - pos[0], posorbit[1] - pos[1]);  
            }
            ctx.beginPath()
            ctx.arc(0, 0, 5, 0, 2*Math.PI);
            ctx.fillStyle = "#727070"
            ctx.fill();
            ctx.stroke();  

            if(j%2 == 0){
                ctx.translate(-(posorbit[0] + pos[0]), -(posorbit[1] - pos[1]))               
            }else{
                ctx.translate(-(posorbit[0] - pos[0]), -(posorbit[1] -pos[1]))
            } 
        }
    }

    ctx.restore()

    window.requestAnimationFrame(draw)
}

function Rot(xValue,yValue, theta){
    const vec = new Array(2);
    vec[0] = xValue * Math.cos(theta) - yValue * Math.sin(theta)
    vec[1]= xValue * Math.sin(theta) + yValue * Math.cos(theta)
    return vec
}

function Orbit(centerX, centerY, rOrbit, thetaOrbit){
    const vec = new Array(2)
    vec[0] = centerX + rOrbit * Math.sin(thetaOrbit)
    vec[1] = centerY - rOrbit * Math.cos(thetaOrbit)
    return vec
}

init()