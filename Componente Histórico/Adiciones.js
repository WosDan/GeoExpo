let menu = document.querySelectorAll(".menu");

menu.forEach((e) => {
  e.addEventListener("click", () => {
    let panel = e.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

let botonCorteza = document.getElementById("corteza");
let dialogCorteza = document.getElementById("dialog-corteza");

if(botonCorteza){
  botonCorteza.addEventListener("click", () => {
    dialogCorteza.showModal();
  });
}

let botonMantoSup = document.getElementById("mantoSup");
let dialogMantoSup = document.getElementById("dialog-mantoSup");

if(botonMantoSup){
  botonMantoSup.addEventListener("click", () => {
  dialogMantoSup.showModal();
  });
}

let botonManto = document.getElementById("manto");
let dialogManto = document.getElementById("dialog-manto");

if(botonManto){
  botonManto.addEventListener("click", () => {
  dialogManto.showModal();
  });
}

let botonNExt = document.getElementById("nExt");
let dialogNExt = document.getElementById("dialog-nExt");

if(botonNExt){
  botonNExt.addEventListener("click", () => {
  dialogNExt.showModal();
  });
}

let botonNInt = document.getElementById("nInt");
let dialogNInt = document.getElementById("dialog-nInt");

if(botonNInt){
  botonNInt.addEventListener("click", () => {
  dialogNInt.showModal();
  });
}

let botonDMoho = document.getElementById("dMoho");
let dialogDMoho = document.getElementById("dialog-dMoho");

if(botonDMoho){
  botonDMoho.addEventListener("click", () => {
  dialogDMoho.showModal();
  });
}

let botonDRepetti = document.getElementById("dRepetti");
let dialogDRepetti = document.getElementById("dialog-dRepetti");

if(botonDRepetti){
  botonDRepetti.addEventListener("click", () => {
  dialogDRepetti.showModal();
  });  
}

let botonDGutenberg = document.getElementById("dGutenberg");
let dialogDGutenberg = document.getElementById("dialog-dGutenberg");

if(botonDGutenberg){
  botonDGutenberg.addEventListener("click", () => {
  dialogDGutenberg.showModal();
  });
}

let botonDLehmann = document.getElementById("dLehmann");
let dialogDLehmann = document.getElementById("dialog-dLehmann");

if(botonDLehmann)
  botonDLehmann.addEventListener("click", () => {
  dialogDLehmann.showModal();
});

let botonLito = document.getElementById("litosfera");
let dialogLito = document.getElementById("dialog-litosfera");

if(botonLito)
  botonLito.addEventListener("click", () => {
  dialogLito.showModal();
});

let botonAste = document.getElementById("astenosfera");
let dialogAste = document.getElementById("dialog-astenosfera");

if(botonAste)
  botonAste.addEventListener("click", () => {
  dialogAste.showModal();
});

let botonMeso = document.getElementById("mesosfera");
let dialogMeso = document.getElementById("dialog-mesosfera");

if(botonMeso)
  botonMeso.addEventListener("click", () => {
  dialogMeso.showModal();
});
