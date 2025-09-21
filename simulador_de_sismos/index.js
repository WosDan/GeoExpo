import Collisions from "collisions"
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

start = 0
function draw(timestamp){
    //Limpiado de frame
    ctx.clearRect(0, 0, 1000, 1000)
    
    //Fondo del espacio
    ctx.drawImage(espacio, 0, 0, 1000, 1000)
    
    //Imagen de la tierra
    ctx.drawImage(tierra, 75, 75, 850, 850)
    ctx.save()

    if (!start) start = timestamp;

  let elapsed = (timestamp - start) / 1000; // tiempo en segundos desde inicio
  let scycle = elapsed % 4; //Ciclo

    window.requestAnimationFrame(draw)
}

//// Aquí finaliza draw.

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