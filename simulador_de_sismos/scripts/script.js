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
    

    let x1 = (scycle)*40
    let y1 = (100/(scycle+10)-10)*40

    theta1 = -angle*Math.PI/180
    thetaOrbit1 = angle*Math.PI/180;
    
    const funciones = [
        [(scycle)*40, (100/(scycle+10)-10)*40],
        [(scycle)*40, -(scycle)*20],
        [(scycle)*40, -Math.pow(scycle, 2)*20]
    ]

    //Matriz de rotación para rotar la función
    //Rot Permite rotar sobre si mismo cualquier cosa, en este caso lo utilicé para una función
    //Rot(posición en x, posición en y, theta es el ángulo)
    let pos = Rot(x1, y1, theta1)
    //En este caso x y y es variable para imitar el movimiento de una función.
    
    theta = angle*Math.PI/180;

    const fx = s => s * 40;
    const fy = s => (100 / (s + 10) - 10) * 40;

    let dx = numberDeriv(fx, scycle)
    let dy = numberDeriv(fy, scycle)

    let f2angle = Math.atan2(dx, dy)

    let pinkx = 0
    let pinkF = Math.sin(4*Math.PI * scycle)*2
    let pinkV = Rot(pinkx, pinkF, f2angle)
    
    // Parametrización de un círculo para tener una orbita
    //Orbit es el método que hace que se mueva el punto o cualquier cosa alrededor de una orbita.
    //Orbit(posición x de en lo que orbita, posición y de en lo que orbita, radio de la orbita, Angulo de donde está en la orbita)
    let posorbit = Orbit(500, 500, 225, thetaOrbit1)
    


    ctx.translate(posorbit[0] + pos[0] + pinkV[0], posorbit[1] - pos[1]- pinkV[1]) 
    
    ctx.beginPath()
    ctx.arc(0, 0, 2, 0, 2*Math.PI);
    ctx.fillStyle = "#727070"
    ctx.fill();
    ctx.stroke();

    //Revertir el translate del anterior para poder crear el próximo punto
    ctx.translate(-(posorbit[0] + pos[0] + pinkV[0]), -(posorbit[1] - pos[1]-pinkV[1]))
    //Invertir el ángulo del rot porque en este caso como la función esta al revés en el eje x se debe rotar de manera contraria
    pos = Rot(x1, y1, -theta1)
    
    ctx.translate(posorbit[0] - pos[0], posorbit[1] - pos[1]);  
    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.translate(-(posorbit[0] - pos[0]), -(posorbit[1] -pos[1]))
     
    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, 2*Math.PI);
    ctx.fillStyle = "#727070"
    ctx.fill()
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

function numberDeriv(x /*La función*/, t /*sería x en estos casos el tiempo */){
    return (x(t + 0.01) - x(t - 0.01)) / (2*0.01);
}

init()