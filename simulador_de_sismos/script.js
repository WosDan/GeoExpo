const tierra = new Image()
const espacio = new Image()
let start = Date.now()

let angle = 270

const ctx = document.getElementById("canvas").getContext("2d");

function init(){
    espacio.src = "src/img/espacio.png";
    tierra.src = "src/img/tierra.png";
    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.clearRect(0, 0, 1000, 1000)
    ctx.drawImage(espacio, 0, 0, 1000, 1000)
    //Set up Earth
    ctx.drawImage(tierra, 75, 75, 850, 850)
    window.requestAnimationFrame(draw)
    ctx.save()

    let s10cycle = ((Date.now() - start)/ 1000 )%4

    // let x = s10cycle*5
    // let y = Math.sin((s10cycle/10)*4*Math.PI/3)*100
    
    let x = (s10cycle)*40
    let y = (100/(s10cycle+10)-10)*40
    theta = -angle*Math.PI/180
    thetaOrbit = angle*Math.PI/180;
    let xr = x * Math.cos(theta) - y * Math.sin(theta);
    let yr = x * Math.sin(theta) + y * Math.cos(theta);
    
    theta = angle*Math.PI/180;
    let cx = 500; 
    let cy = 500;
    let rOrbit = 250;

    let centerX = cx + rOrbit * Math.sin(thetaOrbit);
    let centerY = cy - rOrbit * Math.cos(thetaOrbit);

    ctx.translate(centerX + xr, centerY - yr);  
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "grey"
    ctx.stroke();
    ctx.restore()
}

init()
